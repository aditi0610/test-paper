import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('user')
  getUser(@Body() body: any) {
  return `Hello ${body.name}`;
}

}
