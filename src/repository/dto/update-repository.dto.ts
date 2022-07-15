import { ObjectId } from 'mongoose'

export class UpdateRepositoryDto {
  readonly userId: ObjectId
  readonly title: string
}
