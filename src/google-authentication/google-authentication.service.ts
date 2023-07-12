import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google, Auth } from 'googleapis';
import { PrismaService } from 'src/services/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GoogleAuthenticationService {
  oauthClient: Auth.OAuth2Client;
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    //private readonly authenticationService: AuthenticationService
  ) {
    const clientID = this.configService.get('GOOGLE_AUTH_CLIENT_ID');
    const clientSecret = this.configService.get('GOOGLE_AUTH_CLIENT_SECRET');

    this.oauthClient = new google.auth.OAuth2(
      clientID,
      clientSecret
    );
  }

  async authenticate(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token);

    const email = tokenInfo.email;

    const user = await this.usersService.findByEmail(email);

    if (user) {
      console.log(user)
      return user;
    }
    // }else{
    //   this.prisma.user.create({
    //     data:{
    //       name: tokenInfo.
    //       email: email,
    //     }
    //   })
    // }


    return 'OK';
  }
}
