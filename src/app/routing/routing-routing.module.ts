import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from "../shared/page/page.component";
import { ClientListComponent } from "../client/client-list/client-list.component";
import { ClientNewComponent } from "../client/client-new/client-new.component";
import { ClientDetailComponent } from "../client/client-detail/client-detail.component";
import { EmployeeInviteComponent } from "../employee/employee-invite/employee-invite.component";
import { EmployeeInviteRegistrationComponent } from "../employee/employee-invite-registration/employee-invite-registration.component";
import { SigninComponent } from "../account/components/signin/signin.component";
import { AuthGuard } from "../core/guards/auth.guard";
import { OffersListComponent } from "../offers/components/offers-list/offers-list.component";

const routes: Routes = [
  { path: "", component: SigninComponent },
  { path: "signin", component: SigninComponent },
  { path: "dashboard", component: PageComponent, canActivate: [AuthGuard] },
  { path: "employees", component: PageComponent, canActivate: [AuthGuard] },
  { path: "customers", component: PageComponent, canActivate: [AuthGuard] },
  { path: "offers", component: PageComponent, canActivate: [AuthGuard] },
  { path: "settings", component: PageComponent, canActivate: [AuthGuard] },
  { path: "notifications", component: PageComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ClientListComponent, canActivate: [AuthGuard] },
  { path: "clients", component: ClientListComponent, canActivate: [AuthGuard] },
  {
    path: "clients/new",
    component: ClientNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "clients/:clientId",
    component: ClientDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "clients/:clientId/employees/invite",
    component: EmployeeInviteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "clients/:clientId/employees/invite/:inviteKey",
    component: EmployeeInviteRegistrationComponent
  },
  {
    path: "clients/:clientId/offers",
    component: OffersListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
