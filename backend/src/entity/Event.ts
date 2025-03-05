import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class Event extends BaseEntity {
  @Column()
  @Index()
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  creator: User;

  @Column({ type: 'text' })
  visibility: 'public' | 'private' | 'unlisted';

  @Column({ type: 'text' })
  @Index()
  category: 'music' | 'sports' | 'culture' | 'other';

  @Column({ nullable: true })
  coverImageUrl?: string;

  @Column({ nullable: true })
  maxParticipants?: number;

  @Column({ nullable: true })
  @Index()
  eventDate?: Date;

  @Column({ nullable: true })
  location?: string;

  @Column({ default: false })
  isOnline: boolean;

  @Column({ nullable: true })
  meetingLink?: string;
}
