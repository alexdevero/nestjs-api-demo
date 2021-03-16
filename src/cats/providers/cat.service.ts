import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

import { CatUI } from '../interfaces/interfaces'

@Injectable()
export class AppService {
  private cats: CatUI[] = []

  findOne(id: string): CatUI[] {
    return this.cats.filter(catItem => catItem.name.toLowerCase() === id.toLowerCase())
  }

  findAll(): CatUI[] {
    return this.cats
  }

  createCat(cat: CatUI): string {
    this.cats.push({
      ...cat,
      id: uuidv4()
    })
    return `Cat "${cat.name}" was created.`
  }

  updateCat(id: string, cat: CatUI): string {
    this.cats = this.cats.map(catItem => catItem.name.toLowerCase() === id.toLowerCase() ? {...cat} : catItem)

    return `Cat "${cat.name}" was updated.`
  }

  deleteCat(id: string): string {
    this.cats = this.cats.filter(catItem => catItem.name.toLowerCase() !== id.toLowerCase())

    return `Cat "${id}" was deleted.`
  }
}
