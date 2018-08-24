import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client: Client = new Client();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {
    this.route.params.subscribe(async params => await this.loadData(params));
  }

  async ngOnInit() {
  }

  async loadData(params: Params) {
    const clientId = params['id'];
    this.client = await this.clientService.getClient(clientId, true);
  }

  async saveChanges() {

  }

}