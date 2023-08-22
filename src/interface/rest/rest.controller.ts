import {
  UseInterceptors,
  Body,
  Get,
  Post,
  Controller,
  UseFilters,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ProductService } from 'src/core/services/product/product.service';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { HealthResponseDto } from './dto/health.response.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ServiceGenericExceptionFilter } from 'src/infraestructure/exception/http-exceptions';
import { JwtAuthGuard } from 'src/infraestructure/guard/jwt-auth.guard';
import { UnauthorizedException } from 'src/infraestructure/exception/http-exceptions';
import * as dotenv from 'dotenv';
import { GenericGenerateResponseDto } from './dto/generic-generate-response.dto';
import { GenericGenerateErrorValidationResponseDto } from './dto/generic-generate-error-validation-response.dto';
import { GenericGenerateErrorTimeoutResponseDto } from './dto/generic-generate-error-timeout-response.dto';
import { GenericGenerateErrorResponseDto } from './dto/generic-generate-error-response.dto';

dotenv.config();

@Controller('v1/bingo')
export class RestController {
  constructor(public service: ProductService) {}

  @Get('health')
  public health() {
    const response = new HealthResponseDto();
    response.alive = true;
    return response;
  }
  @Post('/callNumber')
  @UseFilters(ServiceGenericExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @ApiResponse({
    status: 201,
    description: 'Operación Exitosa',
    type: GenericGenerateResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos invalidos',
    type: GenericGenerateErrorValidationResponseDto,
  })
  @ApiResponse({
    status: 408,
    description: 'Tiempo de espera superado',
    type: GenericGenerateErrorTimeoutResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Error procesando la solicitud',
    type: GenericGenerateErrorResponseDto,
  })
  public async callNumber(
    @Body() body: any,
    @Headers('authorization') authorization: string,
  ): Promise<any> {
    if (authorization == 'Bearer ' + process.env.API_TOKEN_GENERIC) {
      const data: any = await this.service.callNumber(body, authorization);
      return data;
    } else {
      console.error('Token de acceso inválido.');
      throw new UnauthorizedException(142, 'Token de acceso inválido.');
    }
  }
  @Post('/cardGeneration')
  @UseFilters(ServiceGenericExceptionFilter)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @ApiResponse({
    status: 201,
    description: 'Operación Exitosa',
    type: GenericGenerateResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos invalidos',
    type: GenericGenerateErrorValidationResponseDto,
  })
  @ApiResponse({
    status: 408,
    description: 'Tiempo de espera superado',
    type: GenericGenerateErrorTimeoutResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Error procesando la solicitud',
    type: GenericGenerateErrorResponseDto,
  })
  public async cardGenerate(
    @Body() body: any,
    @Headers('authorization') authorization: string,
  ): Promise<any> {
    if (authorization == 'Bearer ' + process.env.API_TOKEN_GENERIC) {
      const data: any = await this.service.cardGenerate(body, authorization);
      return data;
    } else {
      console.error('Token de acceso inválido.');
      throw new UnauthorizedException(142, 'Token de acceso inválido.');
    }
  }
}
