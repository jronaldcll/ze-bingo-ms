import { ApiProperty } from '@nestjs/swagger';
export class BaseResponseDto {
  @ApiProperty({
    description:
      'Solicitud digital de transacción minorista: Objeto que contiene información de la petición.',
    required: true,
  })
  generatedNumber: number;
}
