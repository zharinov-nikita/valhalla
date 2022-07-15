import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { Article } from './article.schema'
import { ArticleService } from './article.service'

@Controller('api/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async create(@Body() dto: CreateArticleDto): Promise<Article> {
    return await this.articleService.create(dto)
  }

  @Get()
  async find(): Promise<Article[]> {
    return await this.articleService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Article> {
    return await this.articleService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateArticleDto
  ): Promise<Article> {
    return await this.articleService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.articleService.findByIdAndDelete(_id)
  }
}
