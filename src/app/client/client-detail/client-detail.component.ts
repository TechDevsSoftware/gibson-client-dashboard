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
  initialState: Client = new Client();

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService
  ) {
    this.route.params.subscribe(async params => await this.loadData(params["clientId"]));
  }

  async ngOnInit() {}

  async loadData(clientId: string) {
    this.client = await this.clientService.getClient(clientId, true);
    this.initialState = this.client;
  }

  async saveChanges() {
    console.log("UpdateEntity", this.client);
  }

  async save(propertyPath: string, value: string) {
    console.log("UpdateObject", {propertyPath: propertyPath, value: value});
    const result = await this.clientService.updateClientProperty(this.client.id, propertyPath, value);
    await this.loadData(this.client.id);
    console.log("Update Result", result);
  }

  async resendInvite(employee: EmployeeProfile) {
    await this.employeeService.resendInvitation(employee.emailAddress, this.client.id);
  }
}
