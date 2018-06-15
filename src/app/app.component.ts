import { MailService } from './service/mail.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private mailService: MailService, @Inject('apiUrl') private url) {

  }
}
