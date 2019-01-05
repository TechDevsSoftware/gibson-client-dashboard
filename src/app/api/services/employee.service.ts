/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EmployeeProfile } from '../models/employee-profile';
import { AuthUserProfile } from '../models/auth-user-profile';
import { AuthUserInvitationRequest } from '../models/auth-user-invitation-request';
import { AuthUserInvitationAcceptRequest } from '../models/auth-user-invitation-accept-request';
import { AuthUserRegistration } from '../models/auth-user-registration';
import { LoginRequest } from '../models/login-request';
@Injectable({
  providedIn: 'root',
})
class EmployeeService extends __BaseService {
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
  GetProfileResponse(TechDevsClientKey?: string): __Observable<__StrictHttpResponse<EmployeeProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/employees`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeeProfile>;
      })
    );
  }
  /**
   * @param TechDevs-ClientKey undefined
   * @return Success
   */
  GetProfile(TechDevsClientKey?: string): __Observable<EmployeeProfile> {
    return this.GetProfileResponse(TechDevsClientKey).pipe(
      __map(_r => _r.body as EmployeeProfile)
    );
  }

  /**
   * @param TechDevs-ClientKey undefined
   */
  DeleteAccountResponse(TechDevsClientKey?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/employees`,
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
   * @param TechDevs-ClientKey undefined
   */
  DeleteAccount(TechDevsClientKey?: string): __Observable<null> {
    return this.DeleteAccountResponse(TechDevsClientKey).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeService.InviteEmployeeParams` containing the following parameters:
   *
   * - `invite`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  InviteEmployeeResponse(params: EmployeeService.InviteEmployeeParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.invite;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.InviteEmployeeParams` containing the following parameters:
   *
   * - `invite`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  InviteEmployee(params: EmployeeService.InviteEmployeeParams): __Observable<AuthUserProfile> {
    return this.InviteEmployeeResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.GetUserProfileFromInviteKeyParams` containing the following parameters:
   *
   * - `inviteKey`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  GetUserProfileFromInviteKeyResponse(params: EmployeeService.GetUserProfileFromInviteKeyParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/employees/invite/profile/${params.inviteKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.GetUserProfileFromInviteKeyParams` containing the following parameters:
   *
   * - `inviteKey`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  GetUserProfileFromInviteKey(params: EmployeeService.GetUserProfileFromInviteKeyParams): __Observable<AuthUserProfile> {
    return this.GetUserProfileFromInviteKeyResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.CompleteInviteRegistrationParams` containing the following parameters:
   *
   * - `request`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  CompleteInviteRegistrationResponse(params: EmployeeService.CompleteInviteRegistrationParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite/complete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.CompleteInviteRegistrationParams` containing the following parameters:
   *
   * - `request`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  CompleteInviteRegistration(params: EmployeeService.CompleteInviteRegistrationParams): __Observable<AuthUserProfile> {
    return this.CompleteInviteRegistrationResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.ResendInvitationParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `email`:
   *
   * - `TechDevs-ClientKey`:
   */
  ResendInvitationResponse(params: EmployeeService.ResendInvitationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/invite/resend/${params.userId}`,
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
   * @param params The `EmployeeService.ResendInvitationParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `email`:
   *
   * - `TechDevs-ClientKey`:
   */
  ResendInvitation(params: EmployeeService.ResendInvitationParams): __Observable<null> {
    return this.ResendInvitationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeService.UpdateAccountNameParams` containing the following parameters:
   *
   * - `lastName`:
   *
   * - `firstName`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateAccountNameResponse(params: EmployeeService.UpdateAccountNameParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/setname`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.UpdateAccountNameParams` containing the following parameters:
   *
   * - `lastName`:
   *
   * - `firstName`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateAccountName(params: EmployeeService.UpdateAccountNameParams): __Observable<AuthUserProfile> {
    return this.UpdateAccountNameResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.UpdateAccountContactDetailsParams` containing the following parameters:
   *
   * - `contactNumber`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateAccountContactDetailsResponse(params: EmployeeService.UpdateAccountContactDetailsParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.contactNumber != null) __params = __params.set('contactNumber', params.contactNumber.toString());
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/setcontactdetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.UpdateAccountContactDetailsParams` containing the following parameters:
   *
   * - `contactNumber`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  UpdateAccountContactDetails(params: EmployeeService.UpdateAccountContactDetailsParams): __Observable<AuthUserProfile> {
    return this.UpdateAccountContactDetailsResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.RegisterUserParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  RegisterUserResponse(params: EmployeeService.RegisterUserParams): __Observable<__StrictHttpResponse<AuthUserProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.registration;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthUserProfile>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.RegisterUserParams` containing the following parameters:
   *
   * - `registration`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  RegisterUser(params: EmployeeService.RegisterUserParams): __Observable<AuthUserProfile> {
    return this.RegisterUserResponse(params).pipe(
      __map(_r => _r.body as AuthUserProfile)
    );
  }

  /**
   * @param params The `EmployeeService.LoginParams` containing the following parameters:
   *
   * - `request`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  LoginResponse(params: EmployeeService.LoginParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;
    if (params.TechDevsClientKey != null) __headers = __headers.set('TechDevs-ClientKey', params.TechDevsClientKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/employees/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `EmployeeService.LoginParams` containing the following parameters:
   *
   * - `request`:
   *
   * - `TechDevs-ClientKey`:
   *
   * @return Success
   */
  Login(params: EmployeeService.LoginParams): __Observable<string> {
    return this.LoginResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module EmployeeService {

  /**
   * Parameters for InviteEmployee
   */
  export interface InviteEmployeeParams {
    invite?: AuthUserInvitationRequest;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for GetUserProfileFromInviteKey
   */
  export interface GetUserProfileFromInviteKeyParams {
    inviteKey: string;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for CompleteInviteRegistration
   */
  export interface CompleteInviteRegistrationParams {
    request?: AuthUserInvitationAcceptRequest;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for ResendInvitation
   */
  export interface ResendInvitationParams {
    userId: string;
    email?: string;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for UpdateAccountName
   */
  export interface UpdateAccountNameParams {
    lastName?: string;
    firstName?: string;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for UpdateAccountContactDetails
   */
  export interface UpdateAccountContactDetailsParams {
    contactNumber?: string;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for RegisterUser
   */
  export interface RegisterUserParams {
    registration?: AuthUserRegistration;
    TechDevsClientKey?: string;
  }

  /**
   * Parameters for Login
   */
  export interface LoginParams {
    request?: LoginRequest;
    TechDevsClientKey?: string;
  }
}

export { EmployeeService }
