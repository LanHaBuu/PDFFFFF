import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'

@Injectable()
export class UserService {
    async get(link: string) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(link, { waitUntil: 'networkidle0' });
        const pdf = await page.pdf({ format: 'A4' });
        await browser.close();
        return pdf
    }

    createPDF(url): Promise<Buffer> {
       return this.get(`https://${url}.com`)
    }



}