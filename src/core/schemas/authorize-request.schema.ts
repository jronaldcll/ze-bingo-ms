import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class AuthorizeRequestSchema {
  @IsNotEmpty()
  @IsString()
  client_id: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  client_secret: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  scope: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  grant_type: string;
}
