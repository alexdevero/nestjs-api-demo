export class CreateUserDto {
  id: string
  username: string
  email: string
  password: string
}

export class UpdateUserDto extends CreateUserDto {}
