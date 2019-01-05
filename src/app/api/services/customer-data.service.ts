/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customer } from '../models/customer';
import { MarketingNotificationPreferences } from '../models/marketing-notification-preferences';
import { CustomerNotificationPreferences } from '../models/customer-notification-preferences';
@Injectable({
  providedIn: 'root',
})
class CustomerDataService extends __BaseService {
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
  GetCustomerDataResponse(TechDevsClientKey?: string): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/customer/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetCustomerData(TechDevsClientKey?: string): __Observable<Customer> {
    return this.GetCustomerDataResponse(TechDevsClientKey).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param params The `CustomerDataService.UpdateMarketingPreferencesParams` containing the following parameters:
   *
   * - `marketingPreferences`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateMarketingPreferencesResponse(params: CustomerDataService.UpdateMarketingPreferencesParams): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.marketingPreferences;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/customer/account/preferences/marketing`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param params The `CustomerDataService.UpdateMarketingPreferencesParams` containing the following parameters:
   *
   * - `marketingPreferences`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateMarketingPreferences(params: CustomerDataService.UpdateMarketingPreferencesParams): __Observable<Customer> {
    return this.UpdateMarketingPreferencesResponse(params).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param params The `CustomerDataService.UpdateNotificationPreferencesParams` containing the following parameters:
   *
   * - `notificationPreferences`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateNotificationPreferencesResponse(params: CustomerDataService.UpdateNotificationPreferencesParams): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.notificationPreferences;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/customer/account/preferences/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param params The `CustomerDataService.UpdateNotificationPreferencesParams` containing the following parameters:
   *
   * - `notificationPreferences`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateNotificationPreferences(params: CustomerDataService.UpdateNotificationPreferencesParams): __Observable<Customer> {
    return this.UpdateNotificationPreferencesResponse(params).pipe(
      __map(_r => _r.body as Customer)
    );
  }
}

module CustomerDataService {

  /**
   * Parameters for UpdateMarketingPreferences
   */
  export interface UpdateMarketingPreferencesParams {
    marketingPreferences?: MarketingNotificationPreferences;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for UpdateNotificationPreferences
   */
  export interface UpdateNotificationPreferencesParams {
    notificationPreferences?: CustomerNotificationPreferences;
    TechDevsClientKey?: string;
  }
}

export { CustomerDataService }
