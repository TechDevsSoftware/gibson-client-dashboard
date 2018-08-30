import { Component, OnInit } from "@angular/core";
import { Client, AuthUserInvitationRequest } from "../../app/app.model";
import { EmployeeService } from "../employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../../client/client.service";

@Component({
  templateUrl: "./employee-invite.component.html",
  styleUrls: ["./employee-invite.component.scss"]
})
export class EmployeeInviteComponent implements OnInit {
  invite = new AuthUserInvitationRequest();
  clientId: string;
  client: Client;
  errMessage: string;

  constructor(
    private clientService: ClientService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientId = this.route.snapshot.params["clientId"];
    console.log("ClientId from route", this.clientId);
  }

  async ngOnInit() {
    await this.getClientData();
  }

  resetForm() {
    this.invite = new AuthUserInvitationRequest();
    this.invite.clientName = this.client.name;
  }

  async getClientData() {
    try {
      this.client = await this.clientService.getClient(this.clientId);
      this.resetForm();
    } catch (error) {
      this.errMessage = error.message;
    }
  }

  async inviteEmployee() {
    console.log({ invite: this.invite, clientId: this.clientId });
    try {
      const result = await this.employeeService.inviteEmployee(
        this.invite,
        this.clientId
      );
      console.log("Invite result", result);
      this.router.navigate(["/clients", this.clientId]);
    } catch (error) {
      this.errMessage = error.message;
    }
  }
}
