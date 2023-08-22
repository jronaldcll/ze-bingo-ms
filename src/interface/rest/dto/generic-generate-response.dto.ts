import { ApiProperty } from '@nestjs/swagger';

export class GenericGenerateResponseDto {
  @ApiProperty({
    type: 'string',
    example: 1,
  })
  generatedNumber: number;
}
