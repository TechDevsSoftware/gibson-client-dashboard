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

@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AppNavbarComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    SharedModule,
    ClientModule,
    NgHttpLoaderModule,
    NgbModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
