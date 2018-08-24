import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeService } from "./employee.service";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmployeeInviteComponent } from "./employee-invite/employee-invite.component";

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  declarations: [EmployeeInviteComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {}
