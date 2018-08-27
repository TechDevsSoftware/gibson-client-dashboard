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

  constructor(private authService: TechDevsAuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
