import { Component, OnInit, Input } from "@angular/core";
import { TechDevsAuthService } from "../../core/services/techdevs-auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./app-sidebar.component.html",
  styleUrls: ["./app-sidebar.component.scss"]
})
export class AppSidebarComponent implements OnInit {
  @Input()
  collapsed = true;

<<<<<<< HEAD
  @Input() isMobile: boolean = false;
  @Input() collapsed: boolean = true;

  constructor() {

    this.collapsed = window.innerWidth <= 500;

  }
=======
  constructor(private authService: TechDevsAuthService) {}

  ngOnInit() {}
>>>>>>> ffbbf5a30d7c618eb394c09bc9b16b7193b64570

  logout() {
    this.authService.logout();
  }
<<<<<<< HEAD

  toggleCollapsed() {
    if (this.isMobile) {
      this.collapsed = !this.collapsed;
    }

  }

=======
>>>>>>> ffbbf5a30d7c618eb394c09bc9b16b7193b64570
}
