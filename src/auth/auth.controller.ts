import { Body, Controller, Post, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request } from 'express';
import * as moment from "moment";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  async authenticate(@Body() authData: AuthDto, @Req() request: Request) {

    const token = await this.authService.authenticate(authData);

    if (token) {
      request.res.cookie('token', token, {
        httpOnly: true,
        expires: moment(new Date()).add(7, 'days').toDate()
      });
      return { token }
    }

    throw new UnauthorizedException();
  }
}
