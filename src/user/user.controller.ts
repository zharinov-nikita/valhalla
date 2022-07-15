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
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './user.schema'
import { UserService } from './user.service'

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return await this.userService.create(dto)
  }

  @Get()
  async find(): Promise<User[]> {
    return await this.userService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<User> {
    return await this.userService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateUserDto
  ): Promise<User> {
    return await this.userService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.userService.findByIdAndDelete(_id)
  }
}
