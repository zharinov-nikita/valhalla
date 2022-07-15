import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ArticleDocument = Article & Document

@Schema()
export class Article {
  @Prop({ type: String, required: true, unique: false })
  title: string
}

export const ArticleSchema = SchemaFactory.createForClass(Article)
