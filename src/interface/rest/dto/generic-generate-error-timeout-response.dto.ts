import { ApiProperty } from '@nestjs/swagger';

export class GenericGenerateErrorTimeoutResponseDto {
  @ApiProperty({
    type: 'string',
    example: '2020-09-02T18:15:59Z',
  })
  operationDate: string;

  @ApiProperty({
    type: 'string',
    example: 'Tiempo de espera superado',
  })
  resultDescription: string;

  @ApiProperty({
    type: 'number',
    example: 110,
  })
  resultCode: number;

  @ApiProperty({
    type: 'string',
    example: '51cbe3a441',
  })
  collectorTransaction: string;
}
