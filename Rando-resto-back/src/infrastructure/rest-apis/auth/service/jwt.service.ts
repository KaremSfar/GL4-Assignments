import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadSigner } from 'src/application/services/payload-signer';

@Injectable()
export class JwtSerivceC implements PayloadSigner {
  constructor(private jwtService: JwtService) {}

  sign(payload: any): string {
    return this.jwtService.sign(payload);
  }
}
