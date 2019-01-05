import { Component, OnInit } from '@angular/core';
import { TechDevsAuthService } from '../../../core/services/techdevs-auth.service';
import { AuthUserProfile } from 'src/app/api/models';
import { EmployeeService } from 'src/app/api/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: AuthUserProfile;

  constructor(
    private employeeService: EmployeeService,
    private authService: TechDevsAuthService
  ) { }

  async ngOnInit() {
    this.user = await this.employeeService.GetProfile().toPromise();
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
  }

}
