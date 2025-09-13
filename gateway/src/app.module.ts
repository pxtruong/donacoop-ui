import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'UI', 'browser'), // đường dẫn tới Angular build
      exclude: ['/api*'], // nếu bạn có API, đừng để route UI ăn hết
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
