/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CustomerVehicle } from '../models/customer-vehicle';
@Injectable({
  providedIn: 'root',
})
class MyVehiclesService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `MyVehiclesService.AddVehicleParams` containing the following parameters:
   *
   * - `vehicle`:
   *
   * - `TechDevs-ClientKey`:
   */
  AddVehicleResponse(params: MyVehiclesService.AddVehicleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.vehicle;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/account/myvehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `MyVehiclesService.AddVehicleParams` containing the following parameters:
   *
   * - `vehicle`:
   *
   * - `TechDevs-ClientKey`:
   */
  AddVehicle(params: MyVehiclesService.AddVehicleParams): __Observable<null> {
    return this.AddVehicleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `MyVehiclesService.RemoveVehicleParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   */
  RemoveVehicleResponse(params: MyVehiclesService.RemoveVehicleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.registration != null) __params = __params.set('registration', params.registration.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/account/myvehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `MyVehiclesService.RemoveVehicleParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   */
  RemoveVehicle(params: MyVehiclesService.RemoveVehicleParams): __Observable<null> {
    return this.RemoveVehicleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `MyVehiclesService.LookupVehicleParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   */
  LookupVehicleResponse(params: MyVehiclesService.LookupVehicleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.registration != null) __params = __params.set('registration', params.registration.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/account/myvehicles/lookup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `MyVehiclesService.LookupVehicleParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   */
  LookupVehicle(params: MyVehiclesService.LookupVehicleParams): __Observable<null> {
    return this.LookupVehicleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MyVehiclesService {

  /**
   * Parameters for AddVehicle
   */
  export interface AddVehicleParams {
    vehicle?: CustomerVehicle;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for RemoveVehicle
   */
  export interface RemoveVehicleParams {
    registration?: string;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for LookupVehicle
   */
  export interface LookupVehicleParams {
    registration?: string;
    TechDevsClientKey?: string;
  }
}

export { MyVehiclesService }
