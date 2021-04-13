import { Column, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { UnitsInterface } from './units.interface';

export class Units implements UnitsInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  name: string;
}
