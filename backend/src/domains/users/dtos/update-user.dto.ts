import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;
}
