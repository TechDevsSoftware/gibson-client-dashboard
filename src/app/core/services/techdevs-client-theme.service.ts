import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CSSParameter, Client } from '../../app/app.model';

@Injectable()
export class TechDevsClientThemeService {
  constructor(private httpClient: HttpClient) { }
  async setParameter(clientKey: string, param: CSSParameter): Promise<Client> {
    return this.httpClient.post<Client>(`${environment.apiRoot}/api/v1/clients/${clientKey}/theme/parameters`, param, {}).toPromise();
  }
  async removeParameter(clientKey: string, key: string): Promise<Client> {
    return this.httpClient.delete<Client>(`${environment.apiRoot}/api/v1/clients/${clientKey}/theme/parameters`, { params: new HttpParams().set("key", key) }).toPromise();
  }
}
