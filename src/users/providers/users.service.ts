import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

import { UserUI } from './../interfaces/interface'

@Injectable()
export class UsersService {
  private users: UserUI[] = []

  findAll(): UserUI[] {
    return this.users
  }

  findOne(id: string): UserUI[] {
    return this.users.filter((userItem: UserUI) => userItem.id === id)
  }

  createUser(user: UserUI): string {
    this.users.push({
      ...user,
      id: uuidv4()
    })

    return `User ${user.username} has been created.`
  }

  updateUser(id: string, user: UserUI): string {
    this.users = this.users.map((userItem: UserUI) => userItem.id === id ? { ...user } : userItem)

    return `User ${id} has been updated.`
  }

  deleteUser(id: string): string {
    this.users = this.users.filter((usersItem: UserUI) => usersItem.id !== id)

    return `User ${id} has been removed.`
  }
}
