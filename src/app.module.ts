import { Module } from '@nestjs/common';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), NodemailerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
