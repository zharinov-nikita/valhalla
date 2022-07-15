import { ObjectId } from 'mongoose'

export class FindRepositoryDto {
  readonly userId?: ObjectId
  readonly title?: string
}
