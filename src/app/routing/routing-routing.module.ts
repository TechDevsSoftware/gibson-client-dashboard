import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from "../shared/page/page.component";

const routes: Routes = [
  { path: "", component: PageComponent },
  { path: "dashboard", component: PageComponent },
  { path: "employees", component: PageComponent },
  { path: "customers", component: PageComponent },
  { path: "offers", component: PageComponent },
  { path: "settings", component: PageComponent },
  { path: "notifications", component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {}
