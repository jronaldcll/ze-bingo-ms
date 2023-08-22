import { ApiProperty } from '@nestjs/swagger';

export class TokenRequestDto {
  @ApiProperty({
    description: 'Identificador de la compañia (Código único).',
    type: 'string',
    example: 'Syndeo',
  })
  client_id: string;

  @ApiProperty({
    description: 'Secreto utilizado por el asociado para autentificarse.',
    type: 'string',
    example: '397fac1e16923485ab74e6e0fc7a83bf4b7b4d5e',
  })
  client_secret: string;

  @ApiProperty({
    description: 'Alcance.',
    type: 'string',
    example: 'read',
  })
  scope: string;

  @ApiProperty({
    description: 'Tipo de subvención.',
    type: 'string',
    example: 'client_credentials',
  })
  grant_type: string;
}
