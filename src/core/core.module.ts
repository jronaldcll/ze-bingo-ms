import { Module } from '@nestjs/common';
import { ProductService } from './services/product/product.service';
import { AuthService } from './services/auth/auth.service';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';

@Module({
  imports: [InfraestructureModule],
  providers: [ProductService, AuthService],
  exports: [ProductService, AuthService],
})
export class CoreModule {}
