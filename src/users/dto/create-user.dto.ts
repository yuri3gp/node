import { IsString, IsBoolean, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  @MinLength(3)
  lastName: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
