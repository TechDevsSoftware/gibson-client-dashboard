import { Component, OnInit, Input } from "@angular/core";
import { TechDevsAuthService } from "../../core/services/techdevs-auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./app-sidebar.component.html",
  styleUrls: ["./app-sidebar.component.scss"]
})
export class AppSidebarComponent implements OnInit {
  @Input() collapsed = false;
  @Input() isMobile = false;
  constructor(private authService: TechDevsAuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

  toggleCollapsed() {
    if (this.isMobile) {
      this.collapsed = !this.collapsed;
    }

  }

}
