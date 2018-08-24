import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Client, ClientRegistration } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  public getClients(): Promise<Client[]> {
    return this.http.get<Client[]>(`${environment.apiRoot}/api/v1/clients`).toPromise();
  }

  public getClient(clientId: string, includeRelatedAuthUsers: boolean = false): Promise<Client> {
    const params = new HttpParams().set('includeRelatedAuthUsers', includeRelatedAuthUsers ? 'True' : 'False');
    return this.http.get<Client>(`${environment.apiRoot}/api/v1/clients/${clientId}`, { params: params }).toPromise();
  }

  public createClient(reg: ClientRegistration): Promise<Client> {
    return this.http.post<Client>(`${environment.apiRoot}/api/v1/clients`, reg, {}).toPromise();
  }

}
