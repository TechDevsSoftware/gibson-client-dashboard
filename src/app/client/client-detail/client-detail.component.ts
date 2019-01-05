import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { environment } from "src/environments/environment";
import { CSSParameter, Client } from "src/app/api/models";
import { EmployeeProfile } from "src/app/api/models/employee-profile";
import { ClientThemeService, EmployeeService, ClientService } from "src/app/api/services";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.scss"]
})
export class ClientDetailComponent implements OnInit {
  client: Client = {};
  employee: EmployeeProfile;
  initialState: Client = {};

  cssParamName: string;
  cssParamValue: string;

  displayedColumns: string[] = ['key', 'value'];
  expandedElement: Client | null;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService,
    private themeService: ClientThemeService
  ) {
    this.route.params.subscribe(async params => await this.loadData(params["clientId"]));
  }

  async ngOnInit() { }

  async loadData(clientId: string) {
    this.client = await this.clientService.GetClientById({ clientId: clientId, includeRelatedAuthUsers: true }).toPromise();
    this.initialState = this.client;
  }

  async saveChanges() {
    console.log("UpdateEntity", this.client);
    const result = await this.clientService.UpdateClient({ clientId: this.client.id, client: this.client }).toPromise();
    this.client = result;
  }

  async resendInvite(employee: EmployeeProfile) {
    await this.employeeService.ResendInvitation({ email: employee.emailAddress, userId: this.client.id }).toPromise();
  }

  async setParameter() {
    const result = await this.themeService.AddParameter({ clientKey: this.client.shortKey, parameter: { key: this.cssParamName, value: this.cssParamValue } }).toPromise();
    this.client = result;
  }

  async removeParameter(param: CSSParameter) {
    const result = await this.themeService.RemoveParameter({ clientKey: this.client.shortKey, key: param.key }).toPromise();
    this.client = result;
  }

  openCustomerPortal() {
    window.open(this.customerPortalUrl, '_blank');
  }

  get customerPortalUrl(): string {
    return `${environment.customerPortalRoot}/dealership/${this.client.shortKey}`;
  }
}
