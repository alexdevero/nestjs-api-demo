export class CreateCatDto {
  id: string
  name: string
  age: number
  breed: string
}

export class UpdateCatDto extends CreateCatDto {}
