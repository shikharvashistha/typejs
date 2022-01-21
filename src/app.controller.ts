import { Controller, Get, Redirect} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    @Get('docs')
    @Redirect('https://github.com/shikharvashistha/typejs', 302)
    getDocs() {
        return { url: 'https://github.com/shikharvashistha/typejs' };
    }
}
