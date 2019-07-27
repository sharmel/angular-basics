import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewService = false;
  serverCreation = 'No server created!';


  onCreateNewServer() {
    return this.serverCreation = 'New server created!';
  }
  constructor() { }

  ngOnInit() {
  }

}
