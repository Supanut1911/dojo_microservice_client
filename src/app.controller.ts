import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController {

  private logger = new Logger('AppController')

  @Client(microserviceOptions)
  private client: ClientGrpc
  private grpcService: IGrpcService

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController')
  }

  @Get()
  getHello(): string {
    return 'hi'
  }

  @Post('shoutout')
  shoutOut(
    @Body('msg') message: string
  ) {
    this.logger.log('shoutOut' + message)
    return this.grpcService.shoutOut({message})
  }
}
