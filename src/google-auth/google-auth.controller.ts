import { Body, Controller, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-auth.service';
import { TokenVerificationDto } from './dto/token-verification.dto';
import { Request } from 'express';
import moment from 'moment';

@Controller('google-auth')
export class GoogleAuthenticationController {
  constructor(private readonly googleAuthenticationService: GoogleAuthenticationService) { }

  @Post()
  async authenticate(@Body() tokenData: TokenVerificationDto, @Req() request: Request) {

    const token = await this.googleAuthenticationService.authenticate(tokenData.token);

    if (token) {
      request.res.cookie('token', token, {
        httpOnly: true,
        expires: moment(new Date()).add(7, 'days').toDate()
      });
      return { token }
    }

    return new UnauthorizedException();
  }
}
