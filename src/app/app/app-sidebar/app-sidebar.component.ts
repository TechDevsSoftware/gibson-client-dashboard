import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  @Input() collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
