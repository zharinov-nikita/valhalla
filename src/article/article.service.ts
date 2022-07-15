import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Article, ArticleDocument } from './article.schema'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>
  ) {}

  async create(dto: CreateArticleDto): Promise<Article> {
    return await this.articleModel.create(dto)
  }

  async find(): Promise<Article[]> {
    return await this.articleModel.find()
  }

  async findById(_id: ObjectId): Promise<Article> {
    return await this.articleModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateArticleDto
  ): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Article> {
    return await this.articleModel.findByIdAndDelete({ _id })
  }
}
