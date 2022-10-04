import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../services/client-service.service';
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientServiceService) {}

  ngOnInit(): void {
    this.clientService.getClientes().subscribe((res) => {
      this.clients = res;
    });
  }
}
