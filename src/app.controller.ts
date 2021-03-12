import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { AppService } from './app.service'

import { CreateCatDto } from './create-cat.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `The cat you are looking for is .... #${id} cat.`
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return `Cat "${createCatDto.name}" was created.`
  }
}
