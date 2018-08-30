import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  @Input() isMobile: boolean = false;
  @Input() collapsed: boolean = true;

  constructor() {

    this.collapsed = window.innerWidth <= 500;

  }

  ngOnInit() {
  }

  toggleCollapsed() {
    if (this.isMobile) {
      this.collapsed = !this.collapsed;
    }

  }

}
