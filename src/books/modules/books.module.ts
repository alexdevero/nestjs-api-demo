import { Module } from '@nestjs/common'

import { BooksController } from '../controllers/books.controller'

import { BookService } from '../providers/books.service'

@Module({
  controllers: [BooksController],
  providers: [BookService]
})
export class BooksModule {}
