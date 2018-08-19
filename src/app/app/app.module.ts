import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { AppSidebarComponent } from "./app-sidebar/app-sidebar.component";
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { RoutingModule } from "../routing/routing.module";
import { SharedModule } from "../shared/shared.module";
// Add an icon to the library for convenient access in other components
library.add(fas);

@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AppNavbarComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
