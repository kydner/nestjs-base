import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './models/auth/auth.module';
import { ProductsModule } from './models/products/products.module';
import { BrandsController } from './models/brands/brands.controller';
import { BrandsModule } from './models/brands/brands.module';
import { ProductCategoriesModule } from './models/product-categories/product-categories.module';
import { UnitsController } from './models/units/units.controller';
import { UnitsModule } from './models/units/units.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    AuthModule,
    ProductsModule,
    BrandsModule,
    ProductCategoriesModule,
    UnitsModule,
  ],
  controllers: [BrandsController, UnitsController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
