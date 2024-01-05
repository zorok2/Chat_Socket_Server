import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
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
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: { senderId: number; receiverId: number; content: string },
  ): Promise<void> {
    // const message = this.chatService.createMessage(data.senderId, data.receiverId, data.content);
    // this.server.to(`user_${data.receiverId}`).emit('message', message);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() userId: number,
  ): void {}

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
