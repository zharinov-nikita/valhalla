import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type RepositoryDocument = Repository & Document

@Schema()
export class Repository {
  @Prop({ type: String, required: true, unique: false })
  title: string
}

export const RepositorySchema = SchemaFactory.createForClass(Repository)
