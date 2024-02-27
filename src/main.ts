import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT ?? 9500;
  const app = await NestFactory.create(AppModule);
  const corsOption = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(corsOption);
  await app.listen(PORT, () =>
    Logger.log(`Zjunior backend has awoken on: ${PORT}.`),
  );
}
bootstrap();
