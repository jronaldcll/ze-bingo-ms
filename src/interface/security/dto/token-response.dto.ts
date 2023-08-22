import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto {
  @ApiProperty({
    description: 'Token de acceso generado para el asociado.',
    type: 'string',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  readonly access_token: string;

  @ApiProperty({
    description: 'Tipo de Token.',
    type: 'string',
    example: 'bearer',
  })
  token_type: string;

  @ApiProperty({
    description: 'Tiempo de expiración.',
    type: 'number',
    example: 86400,
  })
  expires_in: number;

  @ApiProperty({
    description: 'Alcance.',
    type: 'string',
    example: 'read',
  })
  scope: string;
}
