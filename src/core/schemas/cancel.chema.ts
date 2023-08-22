import { IsString, ValidateNested, Length } from 'class-validator';

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

  @IsString()
  transactionID: string;
}

export class CancelSchema {
  @ValidateNested()
  retailTransactionDigitalRequest: retailTransactionDigitalRequestDto;
}
