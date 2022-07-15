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
import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import { CreateRepositoryDto } from './dto/create-repository.dto'
import { FindRepositoryDto } from './dto/find-repository.dto'
import { UpdateRepositoryDto } from './dto/update-repository.dto'
import { Repository } from './repository.schema'
import { RepositoryService } from './repository.service'

@Controller('api/repository')
export class RepositoryController {
  constructor(private repositoryService: RepositoryService) {}

  @Post()
  async create(@Body() dto: CreateRepositoryDto): Promise<Repository> {
    return await this.repositoryService.create(dto)
  }

  @Get()
  async find(
    @Query() query: FindRepositoryDto,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Repository[] | any> {
    if (query.userId) {
      const { userId } = query
      const repository = await this.repositoryService.find({ userId })

      if (repository.length > 0) {
        return res.status(200).json(repository)
      }

      return res.status(200).json([])
    }
    return res.status(403).json({
      statusCode: 403,
      message: 'Empty required parameter userId',
    })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Repository> {
    return await this.repositoryService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateRepositoryDto
  ): Promise<Repository> {
    return await this.repositoryService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.repositoryService.findByIdAndDelete(_id)
  }
}
