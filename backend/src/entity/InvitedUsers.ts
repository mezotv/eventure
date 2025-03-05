import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Event } from './Event';
import { User } from './User';

@Entity()
export class InvitedUsers extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @Column()
  invitedAt: Date;

  @Column({ type: 'text' })
  status: 'accepted' | 'declined' | 'pending';

  @Column({ nullable: true })
  respondedAt?: Date;
}
