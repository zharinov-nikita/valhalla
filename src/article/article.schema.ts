import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type ArticleDocument = Article & Document

@Schema()
export class Article {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Repository', required: true })
  repositoryId: ObjectId

  @Prop({ type: String, required: true, unique: false })
  title: string

  @Prop({ type: String, required: true, unique: false })
  description: string

  @Prop({ type: String, required: true, unique: false })
  body: string
}

export const ArticleSchema = SchemaFactory.createForClass(Article)
