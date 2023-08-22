import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { RestController } from './rest/rest.controller';
import { SecurityController } from './security/security.controller';

@Module({
  controllers: [RestController, SecurityController],
  imports: [CoreModule],
})
export class InterfaceModule {}
