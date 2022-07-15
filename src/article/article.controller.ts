import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { Article } from './article.schema'
import { ArticleService } from './article.service'
import { FindArticleDto } from './dto/find-article.dto'
import { Request, Response } from 'express'

@Controller('api/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async create(@Body() dto: CreateArticleDto): Promise<Article> {
    return await this.articleService.create(dto)
  }

  @Get()
  async find(
    @Query() query: FindArticleDto,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Article[] | any> {
    if (query.repositoryId) {
      const { repositoryId } = query
      const article = await this.articleService.find({ repositoryId })

      if (article.length > 0) {
        return res.status(200).json(article)
      }

      return res.status(200).json([])
    }
    return res.status(403).json({
      statusCode: 403,
      message: 'Empty required parameter repositoryId',
    })
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
