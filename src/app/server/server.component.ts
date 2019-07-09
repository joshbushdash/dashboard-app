import { Component, OnInit , Input} from '@angular/core';
import { Server } from '../Shared/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit() {
    this.getServerStatus(this.serverInput.isOnline);
  }

  getServerStatus(isOnline: boolean){
    if(isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    }else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  }
  toggleStatus(onlineStatus: boolean) {
    this.getServerStatus(!onlineStatus);
  }
}
