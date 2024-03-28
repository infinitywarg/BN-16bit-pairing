import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProofService {
  generateProof(n: number) {
    if (n <= 1) {
      return 1;
    }
    return this.generateProof(n - 1) + this.generateProof(n - 2);
  }
}
