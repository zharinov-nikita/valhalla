import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Repository, RepositoryDocument } from './repository.schema'
import { CreateRepositoryDto } from './dto/create-repository.dto'
import { UpdateRepositoryDto } from './dto/update-repository.dto'

@Injectable()
export class RepositoryService {
  constructor(
    @InjectModel(Repository.name)
    private repositoryModel: Model<RepositoryDocument>
  ) {}

  async create(dto: CreateRepositoryDto): Promise<Repository> {
    return await this.repositoryModel.create(dto)
  }

  async find(): Promise<Repository[]> {
    return await this.repositoryModel.find()
  }

  async findById(_id: ObjectId): Promise<Repository> {
    return await this.repositoryModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateRepositoryDto
  ): Promise<Repository> {
    return await this.repositoryModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Repository> {
    return await this.repositoryModel.findByIdAndDelete({ _id })
  }
}
