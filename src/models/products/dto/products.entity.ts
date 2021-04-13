import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';
import { productsInterface } from '../interfaces/products.interface';
// import { uuid } from 'uuidv4';
@Entity()
export class Products implements productsInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  code: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
