import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../services/client-service.service';
import { Client } from '../interfaces/client.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientServiceService) {}

  ngOnInit(): void {
    this.clientService.getClientes().subscribe({
      next: (clients) => {
        this.clients = clients;
      },
    });
  }
}
