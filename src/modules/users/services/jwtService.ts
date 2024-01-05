import { Logger } from '@nestjs/common';
import { jwt } from 'jsonwebtoken';
import * as crypto from 'crypto';
export class JWTService {
  constructor() {
    const key = this.generateKey();
    process.env.PUBLIC_KEY = key.publicKey;
    process.env.PRIVATE_KEY = key.publicKey;
    Logger.debug('LOG KEY TEST ' + process.env.PUBLIC_KEY);
  }
  generateKey() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
    return { publicKey, privateKey };
  }
}
