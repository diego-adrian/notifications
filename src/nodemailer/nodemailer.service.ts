import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class NodemailerService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      ignoreTLS: false,
      auth: {
        user: 'envio.notificaciones.2024@gmail.com',
        pass: 'dgjw lbhw iatv dvxi'
      }
    });
  }

  async sendEmail(body) {
    await this.transporter.sendMail({
      from: 'envio.notificaciones.2024@gmail.com',
      to: 'envio.notificaciones.2024@gmail.com',
      subject: 'Nodemailer test',
      text: 'Hello world',
    });
  }
}
