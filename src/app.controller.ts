import { Controller, Get, Redirect, Post, HttpCode, Param, Body, Put, Delete} from '@nestjs/common';
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

    @Get('/')
    @Redirect('/docs', 302)
    getHome() {
        return { url: '/docs' };
    }

    @Get('/about')
    @Redirect('/docs/about', 302)
    getAbout() {
        return { url: '/docs/about' };
    }

    @Get('/contact')
    @Redirect('/docs/contact', 302)
    getContact() {
        return { url: '/docs/contact' };
    }

    @Get('/faq')
    @Redirect('/docs/faq', 302)
    getFaq() {
        return { url: '/docs/faq' };
    }

    @Get('/privacy')
    @Redirect('/docs/privacy', 302)
    getPrivacy() {
        return { url: '/docs/privacy' };
    }

    @Get('/terms')
    @Redirect('/docs/terms', 302)
    getTerms() {
        return { url: '/docs/terms' };
    }
    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} cat`;
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }
}
