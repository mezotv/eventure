import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Registration } from './Registration';

@Entity()
export class Ticket extends BaseEntity {
  @ManyToOne(() => Registration, (registration) => registration.id)
  registration: Registration;

  @Column()
  ticketNumber: string;

  @Column({ nullable: true })
  seatInfo?: string;
}
