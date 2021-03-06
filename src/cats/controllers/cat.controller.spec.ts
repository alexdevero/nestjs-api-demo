import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './cat.controller'
import { AppService } from '../providers/cat.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return empty array', () => {
      expect(appController.findAll()).toBe([])
    })
  })
})
