import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @EventPattern({ cmd: 'send-email'})
  async sendEmail(@Payload() body) {
    return this.nodemailerService.sendEmail(body);
  }
}
