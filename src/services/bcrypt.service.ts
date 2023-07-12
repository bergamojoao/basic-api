import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  async hash(value: string) {
    return await bcrypt.hash(value, 10);
  }
}
