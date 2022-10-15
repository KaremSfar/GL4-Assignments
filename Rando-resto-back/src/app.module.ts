import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AuthModule } from './infrastructure/rest-apis/auth/auth.module';
import { IngredientsModule } from './infrastructure/rest-apis/ingredients-gateway/ingredients.module';
import { ComponentsGatewayModule } from './infrastructure/rest-apis/components-gateway/components-gateway.module';
import { DishesGatewayModule } from './infrastructure/rest-apis/dishes-gateway/dishes-gateway.module';
import { TransactionModule } from './infrastructure/rest-apis/transactions-gateway/transactions.module';

//Config environment variables
dotenv.config();
//Typeorm Options
const typeOrmOpts: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmOpts),
    AuthModule,
    IngredientsModule,
    ComponentsGatewayModule,
    DishesGatewayModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
