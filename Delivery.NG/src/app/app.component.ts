import { CommunicationService } from './communication/communication.service';
import { Component } from '@angular/core';
import { env } from 'process';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeliverySolution';
  apiPath = environment.apiHttpUrl;

  constructor(private comSer : CommunicationService){
  }

}
