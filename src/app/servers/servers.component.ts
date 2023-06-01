import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreatedStatus = "No server is created!";
  serverName = "";
  createNewServer = false;
  servers = ['TestServer', 'TestServer2'];

  constructor(){
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000)
  }

  onCreateServer(){
    this.createNewServer = true;
    this.serverCreatedStatus = "server was created. Its name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServer(event){
    this.serverName = event.target.value;
  }
}
