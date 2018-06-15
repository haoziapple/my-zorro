import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  message = '该消息来自MailService';
  constructor() { }
}
