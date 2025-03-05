import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class EventLocation extends BaseEntity {
  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  postalCode?: string;

  @Column({ nullable: true, type: 'float' })
  latitude?: number;

  @Column({ nullable: true, type: 'float' })
  longitude?: number;
}
