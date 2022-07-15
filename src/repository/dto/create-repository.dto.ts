import { ObjectId } from 'mongoose'

export class CreateRepositoryDto {
  readonly userId: ObjectId
  readonly title: string
}
