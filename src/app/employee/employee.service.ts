import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {
  AuthUserRegistration,
  EmployeeProfile,
  AuthUserInvitationRequest
} from "../app/app.model";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public registerEmployee(
    reg: AuthUserRegistration,
    clientId: string
  ): Promise<EmployeeProfile[]> {
    const headers = new HttpHeaders().set("TechDevs-ClientId", clientId);
    return this.http
      .post<EmployeeProfile[]>(
        `${environment.apiRoot}/api/v1/employees/account/register`,
        reg,
        { headers: headers }
      )
      .toPromise();
  }

  public inviteEmployee(invite: AuthUserInvitationRequest, clientId: string) {
    const headers = new HttpHeaders().set("TechDevs-ClientId", clientId);
    return this.http
      .post(`${environment.apiRoot}/api/v1/employees/account/invite`, invite, {
        headers: headers
      })
      .toPromise();
  }
}
