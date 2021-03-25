import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { UniqueExceptionFilter } from './util/filters/unique.exception.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //allow Dependency injectiction in validatorsConstraints classes
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Gestion PFE Insat')
    .setDescription('API de gestion des pfes')
    .setVersion('1.0')
    .addSecurity('bearer', {
      in: 'header',
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .addSecurityRequirements('bearer', [])
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //DTO validation configuration
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new UniqueExceptionFilter());

  await app.listen(3000);
}
bootstrap();
