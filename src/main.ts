import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove extra fields that is not exist in dto.
    transform: true, // May be for converting FormData to Object
    // disableErrorMessages: true,
  }))
  
  await app.listen(3000);
}
bootstrap();
