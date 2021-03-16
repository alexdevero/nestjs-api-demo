import { Module } from '@nestjs/common'

import { CatsModule } from './cats/modules/cat.module'

import { BooksModule } from './books/modules/books.module'

@Module({
  imports: [BooksModule, CatsModule]
})
export class AppModule {}
