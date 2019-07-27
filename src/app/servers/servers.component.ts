import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
serverName = 'Test server';
serverCreation = 'New server created';
noServerCreation = 'No new server created';
serverCreated = false;
servers = ['Test Server'];

  onServerCreation() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    return this.serverCreation = 'New server created with name ' + this.serverName;
  }
  constructor() { }

  ngOnInit() {
  }

}
