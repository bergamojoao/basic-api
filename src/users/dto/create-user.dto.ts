import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Alex' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'test@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'mystrongpassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({ example: '+55 (43) 991814181' })
  @IsString()
  @IsOptional()
  phone?: string;
}
