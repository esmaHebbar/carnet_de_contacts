import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //important sinon erreur de ports , nécessaire dès que frontend et backend sont sur des ports différents
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
