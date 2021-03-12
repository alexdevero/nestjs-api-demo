import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'

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

}
