import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { CodeCompilerModule } from './modules/code-compiler-api'

@Module({
  imports: [
    ConfigModule.forRoot(),
    CodeCompilerModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
