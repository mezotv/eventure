import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {
  User,
  Event,
  EventManager,
  InvitedUsers,
  EventLocation,
  EventOccurrence,
  Registration,
  Ticket,
  Notification,
  Invitation,
} from './entity/entities';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs',
      location: path.join(__dirname, '..', 'database.db'),
      autoLoadEntities: true,
      autoSave: true,
      synchronize: true, // Set to false in production, use migrations instead
    }),
    TypeOrmModule.forFeature([
      User,
      Event,
      EventManager,
      InvitedUsers,
      EventLocation,
      EventOccurrence,
      Registration,
      Ticket,
      Notification,
      Invitation,
    ]),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
