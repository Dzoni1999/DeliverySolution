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
  apiPath = environment.apiUrl;

  constructor(private comSer : CommunicationService){
  }

  testApi(){
    this.comSer.GetUserById(12).subscribe(
      data => {
        console.log("api working");
      },
      err => {
        console.log(JSON.stringify(err));
        alert("Error while getting users");
      }
    )
  }
}
