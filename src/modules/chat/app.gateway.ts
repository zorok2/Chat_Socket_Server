import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppService } from 'src/app.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  constructor(private appService: AppService) {}

  @SubscribeMessage('message')
  async handleMessage(client: any, payload: any): Promise<void> {
    // await this.appService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }
  
  afterInit(server: any) {
    console.log(server);
  }
  handleConnection(client: any, ...args: any[]) {
    console.log(`Connected ${client.id}`);
  }
  handleDisconnect(client: any) {
    console.log(`Disconnected: ${client.id}`);
  }
}
