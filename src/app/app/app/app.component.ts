import { Component, HostListener } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public spinkit = Spinkit;

  title = 'gibson-client-dashboard';
  sidebarCollapsed: boolean = false;
  isMobile: boolean;
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.isMobile = window.innerWidth <= 500;

    if (this.innerWidth >= 900 && window.innerWidth < 900) {
      this.sidebarCollapsed = true;
    }
    if (this.innerWidth < 900 && window.innerWidth >= 900) {
      this.sidebarCollapsed = false;
    }

    this.innerWidth = window.innerWidth;
  }

  constructor() {
      this.isMobile = window.innerWidth <= 500;
  }
}
