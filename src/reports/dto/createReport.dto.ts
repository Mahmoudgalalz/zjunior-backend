import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { ReportType } from 'src/shared/types';

export class CreateReport {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(ReportType)
  type: ReportType;
}
