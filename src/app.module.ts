import { Module } from '@nestjs/common';
import { InterfaceModule } from './interface/interface.module';
import { ConfigService } from './utils/config';

@Module({
  imports: [InterfaceModule],
  providers: [ConfigService],
})
export class AppModule {}
