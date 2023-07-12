import { Module } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GoogleAuthenticationController } from './google-authentication.controller';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/services/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { BcryptService } from 'src/services/bcrypt.service';

@Module({
  imports: [UsersModule],
  controllers: [GoogleAuthenticationController],
  providers: [ConfigService, PrismaService, BcryptService, GoogleAuthenticationService, UsersService]
})
export class GoogleAuthenticationModule { }
