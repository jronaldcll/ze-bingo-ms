import { ApiProperty } from '@nestjs/swagger';

export class GenericGenerateErrorValidationResponseDto {
  @ApiProperty({
    type: 'string',
    example: '2020-09-01T22:00:07Z',
  })
  operationDate: string;

  @ApiProperty({
    type: 'string',
    example: 'Datos inválidos',
  })
  resultDescription: string;

  @ApiProperty({
    type: 'number',
    example: 102,
  })
  resultCode: number;

  @ApiProperty({
    type: 'string',
    example: '51cbe3a441',
  })
  collectorTransaction: string;
}
