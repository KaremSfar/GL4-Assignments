import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { DurationInterceptor } from './middlwares-test/interceptors/duration.interceptor';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';



dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  
  app.use(morgan('dev'));

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  app.useGlobalInterceptors(new DurationInterceptor())

  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
