import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //DTO validation configuration
  app.useGlobalPipes(new ValidationPipe());

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
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
