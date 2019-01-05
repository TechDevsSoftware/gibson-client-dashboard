/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { BasicOffer } from '../models/basic-offer';
@Injectable({
  providedIn: 'root',
})
class BasicOffersService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `BasicOffersService.UpdateBasicOfferParams` containing the following parameters:
   *
   * - `offer`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateBasicOfferResponse(params: BasicOffersService.UpdateBasicOfferParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.offer;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/clients/data/basicoffers`,
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
   * @param params The `BasicOffersService.UpdateBasicOfferParams` containing the following parameters:
   *
   * - `offer`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateBasicOffer(params: BasicOffersService.UpdateBasicOfferParams): __Observable<Client> {
    return this.UpdateBasicOfferResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }

  /**
   * @param params The `BasicOffersService.DeleteBasicOfferParams` containing the following parameters:
   *
   * - `offerId`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  DeleteBasicOfferResponse(params: BasicOffersService.DeleteBasicOfferParams): __Observable<__StrictHttpResponse<Client>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/clients/data/basicoffers/${params.offerId}`,
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
   * @param params The `BasicOffersService.DeleteBasicOfferParams` containing the following parameters:
   *
   * - `offerId`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  DeleteBasicOffer(params: BasicOffersService.DeleteBasicOfferParams): __Observable<Client> {
    return this.DeleteBasicOfferResponse(params).pipe(
      __map(_r => _r.body as Client)
    );
  }
}

module BasicOffersService {

  /**
   * Parameters for UpdateBasicOffer
   */
  export interface UpdateBasicOfferParams {
    offer?: BasicOffer;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for DeleteBasicOffer
   */
  export interface DeleteBasicOfferParams {
    offerId: string;
    TechDevsClientKey?: string;
  }
}

export { BasicOffersService }
