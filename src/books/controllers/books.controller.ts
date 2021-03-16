import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { BookService } from '../providers/books.service'

import { CreateBookDto, UpdateBookDto } from './../dto/book.dto'

import { BookUI } from './../interfaces/interfaces'

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BookUI[]> {
    return this.bookService.findOne(id)
  }

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto)
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() updateBook: UpdateBookDto) {
    return this.bookService.updateBook(id, updateBook)
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id)
  }
}
