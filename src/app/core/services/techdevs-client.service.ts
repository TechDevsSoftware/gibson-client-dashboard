import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Client } from 'src/app/app/app.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public getClient(): Promise<Client> {
        return this.httpClient.get<Client>(`${environment.apiRoot}/api/v1/clients/current`, {}).toPromise();
    }

    public get clientKey(): string {
        const url = location.pathname;
        const parts = url.split('/');
        const dealershipIndex = parts.findIndex(p => p == "dealership");
        const result = parts[dealershipIndex + 1];
        return result;
    }
}
