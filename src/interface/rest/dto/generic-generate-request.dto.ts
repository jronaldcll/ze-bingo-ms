import { ApiProperty } from '@nestjs/swagger';

export class GenericGenerateRequestDto {
  @ApiProperty({
    description: 'Código del banco afiliado.',
    type: 'string',
    example: '002',
  })
  collectorCode: string;

  @ApiProperty({
    description: 'Monto a pagar por el servicio.',
    type: 'number',
    example: 24.9,
  })
  amount: number;

  @ApiProperty({
    description: 'Número de celular para enviar la notificación con el pin.',
    type: 'string',
    example: '1965248562',
  })
  customerId: string;

  @ApiProperty({
    description:
      'Código de transacción del banco para realizar la conciliación.',
    type: 'string',
    example: 'f5a4b7d24',
  })
  collectorTransaction: string;

  @ApiProperty({
    required: false,
    description: 'Identificador único universal.',
    type: 'string',
    example: '85694123-4231-4312-4132-128536975246',
  })
  collectorIdentifier: string;

  @ApiProperty({
    description: 'Identificador de la tarifa a pagar.',
    type: 'number',
    example: 3,
  })
  rateId: number;

  @ApiProperty({
    description: 'Código de canal.',
    type: 'string',
    example: 'PZ',
  })
  channelCode: string;

  @ApiProperty({
    required: false,
    description:
      'Fecha y hora de la transacción del recaudador. Valor necesario cuando no se recibe el requestId.',
    type: 'timestamp',
    example: new Date('2020-01-27T14:44:25'),
  })
  operationDate: Date;

  requestId?: number;
}
