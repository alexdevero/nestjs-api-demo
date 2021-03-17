import { Module } from '@nestjs/common'

import { CatsModule } from './cats/modules/cat.module'
import { BooksModule } from './books/modules/books.module'
import { UsersModule } from './users/modules/users.module'

@Module({
  imports: [BooksModule, CatsModule, UsersModule]
})
export class AppModule {}
