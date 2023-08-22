import { Module } from '@nestjs/common';
import { authProviders } from './repository/hardData/auth.repository';
import { productProviders } from './repository/hardData/product.repository';

@Module({
  providers: [...productProviders, ...authProviders],
  exports: [...productProviders, ...authProviders],
})
export class InfraestructureModule {}
