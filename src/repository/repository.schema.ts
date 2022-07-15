import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type RepositoryDocument = Repository & Document

@Schema()
export class Repository {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Repository', required: true })
  userId: ObjectId

  @Prop({ type: String, required: true, unique: false })
  title: string
}

export const RepositorySchema = SchemaFactory.createForClass(Repository)
