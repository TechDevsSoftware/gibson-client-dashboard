import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  @Input() sidebarCollapsed: boolean;
  @Output() toggleSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
