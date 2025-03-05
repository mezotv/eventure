import { IsEmail, IsString } from 'class-validator';

export class RegisterParamsDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
