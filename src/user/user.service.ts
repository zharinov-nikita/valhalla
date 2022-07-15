import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { User, UserDocument } from './user.schema'
import { CreateUserDto } from './user/create-user.dto'
import { UpdateUserDto } from './user/update-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userModel.create(dto)
  }

  async find(): Promise<User[]> {
    return await this.userModel.find()
  }

  async findById(_id: ObjectId): Promise<User> {
    return await this.userModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<User> {
    return await this.userModel.findByIdAndDelete({ _id })
  }
}
