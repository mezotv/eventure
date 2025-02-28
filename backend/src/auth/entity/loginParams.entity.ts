import { IsOptional, IsString } from 'class-validator';

export class LoginParamsDto {
  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  fullname?: string;

  @IsString()
  password: string;
}
