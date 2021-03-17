export class CreateBookDto {
  id: string
  title: string
  author: string
  pubDate: string
  numOfPages: number
}

export class UpdateBookDto extends CreateBookDto {}
