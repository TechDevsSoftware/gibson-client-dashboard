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
import { AuthServiceConfig, AuthService } from "angularx-social-login";
import { provideConfig } from "./social-auth.config";
import { AccountModule } from "../account/account.module";
import { TechDevsAuthService } from "../core/services/techdevs-auth.service";

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
    AccountModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthService,
    TechDevsAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
