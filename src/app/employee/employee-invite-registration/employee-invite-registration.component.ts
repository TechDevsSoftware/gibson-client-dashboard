import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Client, AuthUserProfile, AuthUserInvitationAcceptRequest } from "src/app/api/models";
import { EmployeeService, ClientService } from "src/app/api/services";

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
  req: AuthUserInvitationAcceptRequest = {};

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService,
    private router: Router
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
    this.client = await this.clientService.GetClientById({ clientId: this.clientId }).toPromise();
    this.profile = await this.employeeService.GetUserProfileFromInviteKey({ inviteKey: this.inviteKey }).toPromise();

    this.req.inviteKey = this.inviteKey;
    this.req.email = this.profile.emailAddress;
  }

  resetForm() {
    this.req = {};
  }

  async completeRegistration() {
    const result = await this.employeeService.CompleteInviteRegistration({ request: this.req }).toPromise();
    this.router.navigate(["/clients", this.clientId]);
  }
}
