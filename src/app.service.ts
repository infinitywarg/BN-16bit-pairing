import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ProofService } from './proof/proof.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly proofService: ProofService) {}

  getHealth(): any {
    try {
      return { health: 'ok' };
    } catch (error) {
      throw new InternalServerErrorException(`failed to check health`);
    }
  }

  getProofFromMainThread(complexity: number): number {
    try {
      const startTime = performance.now();
      this.logger.log(`generating proof with complexity ${complexity}`);
      const proof = this.proofService.generateProof(complexity);
      this.logger.log(
        `proof generation completed, total time taken=${performance.now() - startTime}ms`,
      );
      return proof;
    } catch (error) {
      throw new InternalServerErrorException(`failed to generate proof`);
    }
  }
}
