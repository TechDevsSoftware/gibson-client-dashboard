/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { ClientRegistration } from '../models/client-registration';
@Injectable({
  providedIn: 'root',
})
class ClientService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetClientsResponse(TechDevsClientKey?: string): __Observable<__StrictHttpResponse<Array<Client>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Client>>;
      })
    );
  }
  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetClients(TechDevsClientKey?: string): __Observable<Array<Client>> {
    return this.GetClientsResponse(TechDevsClientKey).pipe(
      __map(_r => _r.body as Array<Client>)
    );
  }

  /**
   * @param params The `ClientService.CreateClientParams` containing the following parameters:
   *
   * - `client`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  CreateClientResponse(params: ClientService.CreateClientParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.client;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param params The `ClientService.CreateClientParams` containing the following parameters:
   *
   * - `client`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  CreateClient(params: ClientService.CreateClientParams): __Observable<Client> {
    return this.CreateClientResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetCurrentClientResponse(TechDevsClientKey?: string): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients/current`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetCurrentClient(TechDevsClientKey?: string): __Observable<Client> {
    return this.GetCurrentClientResponse(TechDevsClientKey).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientService.GetClientByIdParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `includeRelatedAuthUsers`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  GetClientByIdResponse(params: ClientService.GetClientByIdParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.includeRelatedAuthUsers != null) __params = __params.set('includeRelatedAuthUsers', params.includeRelatedAuthUsers.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/clients/${params.clientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param params The `ClientService.GetClientByIdParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `includeRelatedAuthUsers`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  GetClientById(params: ClientService.GetClientByIdParams): __Observable<Client> {
    return this.GetClientByIdResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientService.UpdateClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `client`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateClientResponse(params: ClientService.UpdateClientParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.client;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/clients/${params.clientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param params The `ClientService.UpdateClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `client`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateClient(params: ClientService.UpdateClientParams): __Observable<Client> {
    return this.UpdateClientResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `ClientService.DeleteClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  DeleteClientResponse(params: ClientService.DeleteClientParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/clients/${params.clientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Client>;
      })
    );
  }
  /**
   * @param params The `ClientService.DeleteClientParams` containing the following parameters:
   *
   * - `clientId`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  DeleteClient(params: ClientService.DeleteClientParams): __Observable<Client> {
    return this.DeleteClientResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }
}

module ClientService {

  /**
   * Parameters for CreateClient
   */
  export interface CreateClientParams {
    client?: ClientRegistration;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for GetClientById
   */
  export interface GetClientByIdParams {
    clientId: string;
    includeRelatedAuthUsers?: boolean;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for UpdateClient
   */
  export interface UpdateClientParams {
    clientId: string;
    client?: Client;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for DeleteClient
   */
  export interface DeleteClientParams {
    clientId: string;
    TechDevsClientKey?: string;
  }
}

export { ClientService }
