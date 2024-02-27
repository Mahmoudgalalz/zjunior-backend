import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './reports/reports.module';
import { PrismaService } from './prisma';

@Module({
  imports: [ReportModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
