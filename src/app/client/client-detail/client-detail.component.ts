import { Component, OnInit } from "@angular/core";
import { Client, EmployeeProfile, CSSParameter } from "../../app/app.model";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientService } from "../client.service";
import { EmployeeService } from "../../employee/employee.service";
import { TechDevsClientThemeService } from "../../core/services/techdevs-client-theme.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.scss"]
})
export class ClientDetailComponent implements OnInit {
  client: Client = new Client();
  employee: EmployeeProfile;
  initialState: Client = new Client();

  cssParamName: string;
  cssParamValue: string;ß

  displayedColumns: string[] = ['key', 'value'];
  expandedElement: Client | null;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private employeeService: EmployeeService,
    private themeService: TechDevsClientThemeService
  ) {
    this.route.params.subscribe(async params => await this.loadData(params["clientId"]));
  }

  async ngOnInit() { }

  async loadData(clientId: string) {
    this.client = await this.clientService.getClient(clientId, true);
    this.initialState = this.client;
  }

  async saveChanges() {
    console.log("UpdateEntity", this.client);
    const result = await this.clientService.updateClient(this.client.id, this.client);
    this.client = result;
  }

  async save(propertyPath: string, value: string) {
    console.log("UpdateObject", { propertyPath: propertyPath, value: value });
    const result = await this.clientService.updateClientProperty(this.client.id, propertyPath, value);
    await this.loadData(this.client.id);
    console.log("Update Result", result);
  }

  async resendInvite(employee: EmployeeProfile) {
    await this.employeeService.resendInvitation(employee.emailAddress, this.client.id);
  }

  async setParameter() {
    const result = await this.themeService.setParameter(this.client.shortKey, { key: this.cssParamName, value: this.cssParamValue });
    this.client = result;
  }

  async removeParameter(param: CSSParameter) {
    const result = await this.themeService.removeParameter(this.client.shortKey, param.key);
    this.client = result;
  }

  openCustomerPortal() {
    window.open(this.customerPortalUrl, '_blank');
  }

  get customerPortalUrl(): string {
    return `${environment.customerPortalRoot}/dealership/${this.client.shortKey}`;
  }
}
