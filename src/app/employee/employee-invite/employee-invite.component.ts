import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService, EmployeeService } from "src/app/api/services";
import { AuthUserInvitationRequest, Client } from "src/app/api/models";

@Component({
  templateUrl: "./employee-invite.component.html",
  styleUrls: ["./employee-invite.component.scss"]
})
export class EmployeeInviteComponent implements OnInit {
  invite: AuthUserInvitationRequest = {};
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
    this.invite = {};
    this.invite.clientName = this.client.name;
  }

  async getClientData() {
    try {
      this.client = await this.clientService.GetClientById({ clientId: this.clientId }).toPromise();
      this.resetForm();
    } catch (error) {
      this.errMessage = error.message;
    }
  }

  async inviteEmployee() {
    console.log({ invite: this.invite, clientId: this.clientId });
    try {
      const result = await this.employeeService.InviteEmployee({invite: this.invite});
      console.log("Invite result", result);
      this.router.navigate(["/clients", this.clientId]);
    } catch (error) {
      this.errMessage = error.message;
    }
  }
}
