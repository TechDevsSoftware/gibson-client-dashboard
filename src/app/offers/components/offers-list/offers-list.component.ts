import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/api/services';
import { Client } from 'src/app/api/models';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(async params => await this.loadData(params["clientId"]));
  }

  async ngOnInit() {
  }

  async loadData(clientId: string) {
    this.client = await this.clientService.GetClientById({ clientId: clientId }).toPromise();
  }

}
