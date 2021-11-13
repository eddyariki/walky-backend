import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApolloServer } from 'apollo-server-cloud-functions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = new ApolloServer({});
  server.createHandler();
}
bootstrap();
