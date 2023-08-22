import { ApiProperty } from '@nestjs/swagger';

class OriginDto {
  @ApiProperty({
    description: 'Identificador único de la compañia.',
    type: 'string',
    example: 'Syndeo',
  })
  retailerName: string;
  @ApiProperty({
    description: 'Fecha y hora en que se generó la solicitud.',
    type: 'string',
    example: 'Test123',
  })
  accessID: string;
  @ApiProperty({
    description: 'Moneda.',
    type: 'string',
    example: 'USD',
  })
  currencyCode: string;
}
class ProductDto {
  @ApiProperty({
    description: 'El valor del producto solicitado.',
    type: 'string',
    example: '10.0',
  })
  amount: string;
  @ApiProperty({
    description: 'Identificador numérico del producto.',
    type: 'string',
    example: '799366833765',
  })
  upc: string;
  @ApiProperty({
    description:
      'Número de versión de los Términos y condiciones almacenados localmente asociados con el UPC del producto solicitado.',
    type: 'string',
    example: '99',
  })
  tcVersion: string;
}
class RetailTransactionDigitalRequestDto {
  @ApiProperty({
    description: 'Fecha y hora en que se generó la solicitud.',
    type: 'string',
    example: '2014-06-18T12:02:02.123Z',
  })
  dateTime: string;
  @ApiProperty({
    description: 'Información del menorista.',
    required: true,
  })
  origin: OriginDto;
  @ApiProperty({
    description: 'Información del menorista.',
    required: true,
  })
  product: ProductDto;
  @ApiProperty({
    description: 'Identificador de transacción generado por el minorista.',
    type: 'string',
    example: '29b83d7d-0bf3-41bc-9ee6f07ebcdf14ba',
  })
  transactionID: string;
}

export class BaseRequestDto {
  @ApiProperty({
    description:
      'Solicitud digital de transacción minorista: Objeto que contiene información de la petición.',
    required: true,
  })
  RetailTransactionDigitalRequest: RetailTransactionDigitalRequestDto;
}
