import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('healthy')
  getHello() {
    const buildVersion = this.configService.get('BUILD_VERSION');
    if (buildVersion) {
      return { buildVersion: `${buildVersion}` };
    }
    return 'Page Not Found';
  }
}
