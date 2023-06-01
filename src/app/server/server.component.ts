import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverId = 20;
    serverStatus = Math.random() < 0.5 ? "offline": "online";
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === "offline" ? "red": "green";
    }
}