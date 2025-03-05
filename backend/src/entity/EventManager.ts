import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Event } from './Event';
import { User } from './User';

@Entity()
export class EventManager extends BaseEntity {
  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
