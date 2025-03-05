import { Entity, ManyToOne, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class RefreshToken extends BaseEntity {
  @ManyToOne(() => User, (user) => user.refreshTokens, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'text' })
  token: string;

  @Column()
  expiresAt: Date;
}
