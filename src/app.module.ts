import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppMiddleware } from './app.middleware'
import { ArticleModule } from './article/article.module'
import { RepositoryModule } from './repository/repository.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(String(process.env.MONGO_URL), {
      dbName: String(process.env.MONGO_DB),
    }),
    RepositoryModule,
    ArticleModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
