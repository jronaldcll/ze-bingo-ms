import { IsString, ValidateNested, Length } from 'class-validator';

class productDto {
  @IsString()
  amount: string;

  @IsString()
  upc: string;

  @IsString()
  tcVersion: string;
}

class originDto {
  @IsString()
  retailerName: string;

  @IsString()
  accessID: string;

  @IsString()
  currencyCode: string;
}

class retailTransactionDigitalRequestDto {
  @IsString()
  @Length(24)
  dateTime: string;

  @ValidateNested()
  origin: originDto;

  @ValidateNested()
  product: productDto;

  @IsString()
  transactionID: string;
}

export class BaseRequestSchema {
  @ValidateNested()
  retailTransactionDigitalRequest: retailTransactionDigitalRequestDto;
}
