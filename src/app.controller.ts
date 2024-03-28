import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('/proof/main-thread/:complexity')
  getProofFromMainThread(@Param('complexity') complexity: string) {
    return this.appService.getProofFromMainThread(+complexity);
  }

  // @Get('/proof/multi-thread/:complexity')
  // getProofFromWorkerThread(): string {
  //   return this.appService.getHello();
  // }
}
