import { ApiProperty } from '@nestjs/swagger';

export class GenericGenerateErrorResponseDto {
  @ApiProperty({
    type: 'string',
    example: '2020-09-02T18:15:59Z',
  })
  operationDate: string;

  @ApiProperty({
    type: 'string',
    example: 'Error procesando la solicitud',
  })
  resultDescription: string;

  @ApiProperty({
    type: 'number',
    example: 111,
  })
  resultCode: number;

  @ApiProperty({
    type: 'string',
    example: '51cbe3a441',
  })
  collectorTransaction: string;
}
