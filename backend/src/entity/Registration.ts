import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { EventOccurrence } from './EventOccurrence';
import { User } from './User';

@Entity()
export class Registration extends BaseEntity {
  @ManyToOne(() => EventOccurrence, (occurrence) => occurrence.id)
  eventOccurrence: EventOccurrence;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({ type: 'text' })
  status: 'registered' | 'cancelled' | 'pending';

  @Column()
  registrationDate: Date;
}
