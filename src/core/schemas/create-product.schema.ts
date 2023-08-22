import {
  IsString,
  ValidateNested,
  Length,
  MinLength,
  MaxLength,
} from 'class-validator';

class checkDto {
  @IsString()
  @Length(1, 15)
  checkNumber: string;

  @IsString()
  @Length(3)
  financialEntity: string;
}

export class CollectorPaymentRequestSchema {
  @IsString()
  @Length(36)
  rqUUID: string;

  @IsString()
  @Length(19)
  operationDate: string;

  @IsString()
  @Length(8)
  operationNumber: string;

  @IsString()
  @Length(3)
  financialEntity: string;

  @IsString()
  @Length(2)
  channel: string;

  @IsString()
  serviceId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(14)
  customerId: string;

  @IsString()
  @Length(2)
  paymentType: string;

  @IsString()
  amountTotal: string;

  @ValidateNested()
  check: checkDto;
}
