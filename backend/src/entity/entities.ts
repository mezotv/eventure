import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class User extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user, {
    cascade: true,
  })
  refreshTokens: RefreshToken[];
}

@Entity()
export class RefreshToken extends BaseEntity {
  @ManyToOne(() => User, (user) => user.refreshTokens, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'text' })
  token: string; // Store hashed token

  @Column()
  expiresAt: Date;
}

@Entity()
export class Event extends BaseEntity {
  @Column()
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  creator: User;

  @Column({ type: 'text' })
  visibility: 'public' | 'private' | 'unlisted';

  @Column({ type: 'text' })
  category: 'music' | 'sports' | 'culture' | 'other';

  @Column({ nullable: true })
  coverImageUrl?: string;

  @Column({ nullable: true })
  maxParticipants?: number;
}

@Entity()
export class EventManager extends BaseEntity {
  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}

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

@Entity()
export class Ticket extends BaseEntity {
  @ManyToOne(() => Registration, (registration) => registration.id)
  registration: Registration;

  @Column()
  ticketNumber: string;

  @Column({ nullable: true })
  seatInfo?: string;
}

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
