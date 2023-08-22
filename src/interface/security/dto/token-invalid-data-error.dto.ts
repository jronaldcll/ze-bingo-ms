import { ApiProperty } from '@nestjs/swagger';

export class TokenInvalidDataErrorDto {
  @ApiProperty({
    description: 'Código de respuesta del error.',
    type: 'number',
    example: 102,
  })
  code: string;

  @ApiProperty({
    description: 'Descripción de respuesta del error.',
    type: 'string',
    example: 'Datos inválidos.',
  })
  message: string;

  @ApiProperty({
    description: 'Array sin información.',
    type: 'array|object',
    example: [],
  })
  data: [];
}
