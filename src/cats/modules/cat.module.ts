import { Module } from '@nestjs/common'
import { AppController } from '../controllers/cat.controller'
import { AppService } from '../providers/cat.service'

@Module({
  controllers: [AppController],
  providers: [AppService]
})
export class CatsModule {}
