import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { TokenVerificationDto } from './dto/token-verification.dto';
import { Request, Response } from 'express';

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(private readonly googleAuthenticationService: GoogleAuthenticationService) { }

  @Post()
  async authenticate(@Body() tokenData: TokenVerificationDto, @Req() request: Request) {
    // const {
    //   accessTokenCookie,
    //   refreshTokenCookie,
    //   user
    // } = await this.googleAuthenticationService.authenticate(tokenData.token);
    await this.googleAuthenticationService.authenticate(tokenData.token);

    //request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);

    return 'OK';
  }
}
