import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { AppSidebarComponent } from "./app-sidebar/app-sidebar.component";
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { RoutingModule } from "../routing/routing.module";
import { SharedModule } from "../shared/shared.module";
import { ClientModule } from "../client/client.module";
import { NgHttpLoaderModule } from "ng-http-loader";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeModule } from "../employee/employee.module";
import { CoreModule } from "../core/core.module";
import { AuthServiceConfig, AuthService, GoogleLoginProvider, SocialLoginModule } from "angularx-social-login";
import { AccountModule } from "../account/account.module";
import { TechDevsAuthService } from "../core/services/techdevs-auth.service";
import { ClientKeyInterceptor } from "../core/interceptors/clientkey.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("562400802513-l81m74td45m43m3r8mj9qq3ipdg9o071.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AppNavbarComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    CoreModule,
    SharedModule,
    ClientModule,
    NgHttpLoaderModule,
    NgbModule,
    EmployeeModule,
    AccountModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthService,
    TechDevsAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
