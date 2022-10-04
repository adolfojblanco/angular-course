import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from './services/client-service.service';
import { Client } from '../interfaces/client.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [],
})
export class ClientsComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {

  }
}
