import { Module } from '@nestjs/common'

import { CatsModule } from './cats/modules/cat.module'

@Module({
  imports: [CatsModule]
})
export class AppModule {}
