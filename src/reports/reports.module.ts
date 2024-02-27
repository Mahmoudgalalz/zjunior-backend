import { Module } from '@nestjs/common';
import { ReportController } from './reports.controller';
import { PrismaService } from 'src/prisma';
import { ReportService } from './reports.service';

@Module({
  imports: [],
  controllers: [ReportController],
  providers: [PrismaService, ReportService],
})
export class ReportModule {}
