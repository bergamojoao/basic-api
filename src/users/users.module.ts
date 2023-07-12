import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/services/prisma.service';
import { BcryptService } from 'src/services/bcrypt.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, BcryptService, UsersService],
})
export class UsersModule {}
