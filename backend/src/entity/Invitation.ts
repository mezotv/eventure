import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Event } from './Event';

@Entity()
export class Invitation extends BaseEntity {
  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @Column()
  email: string;

  @Column()
  invitedAt: Date;

  @Column({ nullable: true })
  message?: string;
}
