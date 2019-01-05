import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { EmployeeService } from 'src/app/api/services';
import { AuthUserRegistration } from 'src/app/api/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: AuthUserRegistration;
  confirmPassword: string;
  errMessage: string;

  constructor(
    private employeeService: EmployeeService,
    private authService: TechDevsAuthService
  ) { }

  ngOnInit() {
    this.resetRegistration();
  }

  resetRegistration() {
    this.reg = {};
    this.reg.providerName = "TechDevs";
  }

  get passwordsMatch() {
    return ((this.reg.password === this.confirmPassword) && (this.reg.password != null));
  }

  async register() {
    await this.employeeService.RegisterUser({ registration: this.reg }).toPromise();
    await this.authService.loginWithEmail(this.reg.emailAddress, this.reg.password);
  }

}
