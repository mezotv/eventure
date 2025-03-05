import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

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
