import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './utils/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const config: any = app.get(ConfigService);
  const name = config.get('API_NAME');
  const title = config.get('API_TITLE');
  const version = config.get('API_VERSION');
  const description = config.get('API_DESCRIPTION');

  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(`${version}.0`)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`v${version}/${name}/docs`, app, document);

  await app.listen(8080, '0.0.0.0');
}
bootstrap();
