import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { AppService } from './app.service'

import { CreateCatDto, UpdateCatDto } from './dto'

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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `Cat "${id}" was updated.`
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Cat "${id}" was deleted.`
  }
}
