import { IsString, ValidateNested, Length } from 'class-validator';

class productDto {
  @IsString()
  code: string;

  @IsString()
  amount: string;

  @IsString()
  upc: string;
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

export class ReturnActiveCodeSchema {
  @ValidateNested()
  retailTransactionDigitalRequest: retailTransactionDigitalRequestDto;
}
