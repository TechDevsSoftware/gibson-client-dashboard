import { Injectable, HostListener } from "@angular/core";

@Injectable()
export class MobileService {

  sidebarCollapsed: boolean = false;
  public isMobile: boolean;
  innerWidth: any;
  mobileBreak = 700;

  constructor() {
    this.isMobile = window.innerWidth <= this.mobileBreak;
    if (this.isMobile) this.sidebarCollapsed = true;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.isMobile = window.innerWidth <= this.mobileBreak;

    if (this.innerWidth >= 900 && window.innerWidth < 900) {
      this.sidebarCollapsed = true;
    }
    if (this.innerWidth < 900 && window.innerWidth >= 900) {
      this.sidebarCollapsed = false;
    }


    if (this.isMobile) this.sidebarCollapsed = true;
    this.innerWidth = window.innerWidth;
  }

}
