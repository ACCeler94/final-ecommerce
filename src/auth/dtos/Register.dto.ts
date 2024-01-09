import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(5, 40)
  @IsString()
  password: string;

  @IsNotEmpty()
  @Length(5, 40)
  @IsString()
  @Match('password')
  repeatPassword: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
