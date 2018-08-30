import { Component, OnInit } from "@angular/core";
import { Client, EmployeeProfile } from "../../app/app.model";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientService } from "../client.service";
import { EmployeeService } from "../../employee/employee.service";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.scss"]
})
export class ClientDetailComponent implements OnInit {
  client: Client = new Client();
  employee: EmployeeProfile;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService
  ) {
    this.route.params.subscribe(async params => await this.loadData(params));
  }

  async ngOnInit() {}

  async loadData(params: Params) {
    const clientId = params["clientId"];
    this.client = await this.clientService.getClient(clientId, true);
  }

  async saveChanges() {}

  async resendInvite(employee: EmployeeProfile) {
    await this.employeeService.resendInvitation(employee.emailAddress, this.client.id);
  }
}
