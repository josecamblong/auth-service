
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class signInDto {
  @IsEmail()
  username: string;

  @IsNotEmpty()
  @MaxLength(32)
  password: string;
}
