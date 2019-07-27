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
serverCreation = 'No new server created';
serverCreated = false;

  onServerCreation() {
    this.serverCreated = true;
    return this.serverCreation = 'New server created with name ' + this.serverName;
  }
  constructor() { }

  ngOnInit() {
  }

}
