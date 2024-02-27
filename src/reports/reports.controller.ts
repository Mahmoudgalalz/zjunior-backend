import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateReport } from './dto/createReport.dto';
import { Response } from 'express';
import { ReportService } from './reports.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  async sendReport(@Body() report: CreateReport, @Res() res: Response) {
    const data = await this.reportService.sendReport(report);
    res.status(HttpStatus.CREATED).json(data);
  }
}
