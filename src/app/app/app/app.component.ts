import { Component, HostListener } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gibson-client-dashboard';
  sidebarCollapsed: boolean = true;
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (this.innerWidth >= 900 && window.innerWidth < 900) {
      this.sidebarCollapsed = true;
    }
    if (this.innerWidth < 900 && window.innerWidth >= 900) {
      this.sidebarCollapsed = false;
    }


    this.innerWidth = window.innerWidth;
  }
}
