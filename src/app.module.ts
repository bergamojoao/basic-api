import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './services/prisma.service';
import { GoogleAuthenticationModule } from './google-authentication/google-authentication.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, GoogleAuthenticationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
