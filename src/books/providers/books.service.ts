import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

import { BookUI } from './../interfaces/interfaces'

@Injectable()
export class BookService {
  private books: BookUI[] = []

  findOne(id: string): BookUI[] {
    return this.books.filter(bookItem => bookItem.id === id)
  }

  findAll(): BookUI[] {
    return this.books
  }

  createBook(book: BookUI): string {
    this.books.push({
      ...book,
      id: uuidv4()
    })

    return `Book "${book.title}" has been created.`
  }

  updateBook(id: string, book: BookUI): string {
    this.books = this.books.map((bookItem) => bookItem.id === id ? { ...book } : bookItem)

    return `Book "${book.title}" has been updated.`
  }

  deleteBook(id: string): string {
    this.books = this.books.filter((bookItem) => bookItem.id !== id)

    return `Book "${id}" has been deleted.`
  }
}
