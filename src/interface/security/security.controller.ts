import {
  UseInterceptors,
  Body,
  Get,
  Post,
  Controller,
  UseFilters,
} from '@nestjs/common';
import { ServiceGenericExceptionFilter } from 'src/infraestructure/exception/http-exceptions';
import { ApiResponse } from '@nestjs/swagger';
import { TokenResponseDto } from '../security/dto/token-response.dto';
import { TokenInvalidDataErrorDto } from '../security/dto/token-invalid-data-error.dto';
import { TokenRequestDto } from '../security/dto/token-request.dto';
import { AuthService } from 'src/core/services/auth/auth.service';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';

@Controller('v1/bingo')
export class SecurityController {
  constructor(public authService: AuthService) {}

  @UseInterceptors(LoggingInterceptor)
  @UseFilters(ServiceGenericExceptionFilter)
  @Post('/security/token')
  @ApiResponse({
    status: 201,
    description: 'Operación Exitosa',
    type: TokenResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos invalidos | Hash inválido.',
    type: TokenInvalidDataErrorDto,
  })
  async authorize(@Body() req: TokenRequestDto) {
    return await this.authService.authorize(req);
  }
}
