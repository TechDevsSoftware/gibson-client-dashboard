import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../../core/services/mobile.service';
import { ClientService } from 'src/app/api/services';
import { Client } from 'src/app/api/models';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private mobileService: MobileService
  ) {
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.clients = await this.clientService.GetClients().toPromise();
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
