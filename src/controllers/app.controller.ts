import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { AppService } from '../providers/app.service'

import { CreateCatDto, UpdateCatDto } from '../dto'

import { CatUI } from '../interfaces/interfaces'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll() {
    return this.appService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CatUI[]> {
    return this.appService.findOne(id)
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.appService.createCat(createCatDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.appService.updateCat(id, updateCatDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.deleteCat(id)
  }
}
