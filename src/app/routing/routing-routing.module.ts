import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from "../shared/page/page.component";
import { ClientListComponent } from "../client/client-list/client-list.component";
import { ClientNewComponent } from "../client/client-new/client-new.component";
import { ClientDetailComponent } from "../client/client-detail/client-detail.component";

const routes: Routes = [
  { path: "", component: PageComponent },
  { path: "dashboard", component: PageComponent },
  { path: "employees", component: PageComponent },
  { path: "customers", component: PageComponent },
  { path: "offers", component: PageComponent },
  { path: "settings", component: PageComponent },
  { path: "notifications", component: PageComponent },
  { path: "clients", component: ClientListComponent },
  { path: "clients/new", component: ClientNewComponent },
  { path: "clients/:id", component: ClientDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
