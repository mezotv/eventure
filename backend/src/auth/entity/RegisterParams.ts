import { IsString } from 'class-validator';

export class RegisterParamsDto {
  @IsString()
  fullName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
