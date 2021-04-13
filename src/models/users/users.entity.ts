import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';
import { usersInterface } from './interfaces/users.interface';
// import { uuid } from 'uuidv4';
@Entity('users')
export class Users implements usersInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
