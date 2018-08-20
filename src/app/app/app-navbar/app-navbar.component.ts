import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
