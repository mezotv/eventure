import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class Notification extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column('text')
  message: string;

  @Column({ type: 'text' })
  type: 'registration' | 'event_update' | 'reminder' | 'general';

  @Column()
  isRead: boolean;
}
