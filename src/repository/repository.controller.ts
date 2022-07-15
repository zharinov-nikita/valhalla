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
import { CreateRepositoryDto } from './dto/create-repository.dto'
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
  async find(): Promise<Repository[]> {
    return await this.repositoryService.find()
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
