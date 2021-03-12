import { Injectable } from '@nestjs/common'

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
    this.cats.push(cat)
    return `Cat "${cat.name}" was created.`
  }

  updateCat(id: string, cat: CatUI): string {
    const catItem = this.cats.find(catItem => catItem.name.toLowerCase() === id.toLowerCase())
    catItem.name = cat.name
    catItem.breed = cat.breed
    catItem.age = cat.age

    return `Cat "${id}" was updated.`
  }

  deleteCat(id: string): string {
    this.cats = this.cats.filter(catItem => catItem.name.toLowerCase() !== id.toLowerCase())

    return `Cat "${id}" was deleted.`
  }
}
