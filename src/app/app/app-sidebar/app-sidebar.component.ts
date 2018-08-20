import { Component, OnInit, Input } from '@angular/core';
import { faCaretDown, faUsers } from '@fortawesome/free-solid-svg-icons';

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
