import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { CreateReport } from './dto/createReport.dto';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}
  sendReport(report: CreateReport) {
    try {
      const { email, ...rest } = report;
      const res = this.prisma.reports.create({
        data: {
          issuedBy: email,
          ...rest,
        },
      });
      return res;
    } catch (err) {
      Logger.log(err, 'Reports');
    }
  }
}
