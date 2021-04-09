import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  BeforeInsert,
} from 'typeorm';
import { uuid } from 'uuidv4';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  uuid() {
    this.id = uuid();
  }
}
