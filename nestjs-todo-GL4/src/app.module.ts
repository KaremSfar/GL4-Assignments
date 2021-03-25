import { CorsMiddleware } from '@nest-middlewares/cors';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlwares-test/middlewares/logger-middleware';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { MiddlwaresTestModule } from './middlwares-test/middlwares-test.module';


// Module = Entité Logicielle à part, qui peut etre independante, ou dépendante d'autre modules importé
// Un Module encapsule plusieurs fonctionnalité liées
// On pourra dire qu'un module incluera les fonctionnalités nécessaires pour un métier de l'application

// Le Module Racine est le point de départ utilisé par Nest pour crée le graphe de l'application (Tree)

// @Decorator => because of the Decorator design pattern !

const corsOptions = {
  //dont forget http:// in origin
  optionsSuccessStatus: 200
}

@Module({
  imports: [
    TestModule,
    TodoModule,
    ConfigModule.forRoot({
       isGlobal: true
     }),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    AuthModule,
    MiddlwaresTestModule
  ], // imported modules
  exports: [], // ce qu'il va exporter
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    CorsMiddleware.configure(corsOptions);
    consumer
      .apply(CorsMiddleware).forRoutes('')
      .apply(HelmetMiddleware).forRoutes('')
      .apply(LoggerMiddleware).forRoutes('')
  }
}
