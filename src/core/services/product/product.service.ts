import { Injectable, Inject } from '@nestjs/common';
import { IProductRepository } from 'src/core/repository/product.repository';
@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private repository: IProductRepository,
  ) {}

  public async callNumber(game: any, authorization: string): Promise<any> {
    console.log(authorization);
    return this.repository.callNumber(game);
  }

  public async cardGenerate(game: any, authorization: string): Promise<any> {
    console.log(authorization);
    return this.repository.cardGenerate(game);
  }
}
