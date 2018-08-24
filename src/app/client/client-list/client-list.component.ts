import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.clients = await this.clientService.getClients();
    console.log(this.clients);
  }

  navToDetail(id: string) {
    this.router.navigate(['/clients', id]);
  }

  navBack() {
    window.history.back();
  }

  addClient() {
    this.router.navigate(['/clients', 'new']);
  }

}
