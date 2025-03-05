import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Event } from './Event';
import { EventLocation } from './EventLocation';

@Entity()
export class EventOccurrence extends BaseEntity {
  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate?: Date;

  @ManyToOne(() => EventLocation, (location) => location.id)
  location: EventLocation;
}
