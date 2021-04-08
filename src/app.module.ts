import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './models/users/users.controller';
import { ProductsController } from './models/products/products.controller';
import { UsersService } from './models/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
  ],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
