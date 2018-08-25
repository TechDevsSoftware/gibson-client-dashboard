import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  Client,
  AuthUserInviteAcceptRequest,
  AuthUserProfile
} from "../../app/app.model";
import { ClientService } from "../../client/client.service";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-invite-registration",
  templateUrl: "./employee-invite-registration.component.html",
  styleUrls: ["./employee-invite-registration.component.scss"]
})
export class EmployeeInviteRegistrationComponent implements OnInit {
  private clientId: string;
  private inviteKey: string;

  confirmPassword: string;
  client: Client;
  profile: AuthUserProfile;
  req = new AuthUserInviteAcceptRequest();

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService
  ) {
    this.clientId = this.route.snapshot.params["clientId"];
    this.inviteKey = this.route.snapshot.params["inviteKey"];

    if (!this.clientId || !this.inviteKey) {
      console.log("Error fetching clientId or InviteKey", this.route.snapshot);
    }

    console.log({ clientId: this.clientId, inviteKey: this.inviteKey });
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.client = await this.clientService.getClient(this.clientId);
    this.profile = await this.employeeService.userProfileFromInviteKey(
      this.inviteKey,
      this.clientId
    );
    this.req.inviteKey = this.inviteKey;
    this.req.email = this.profile.emailAddress;
  }

  resetForm() {
    this.req = new AuthUserInviteAcceptRequest();
  }

  async completeRegistration() {
    const result = await this.employeeService.completeRegistration(this.req, this.clientId);
  }
}
