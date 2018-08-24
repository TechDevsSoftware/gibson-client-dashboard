import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() breadcrumb: string;
  @Input() btn1Label: string;
  @Input() btn2Label: string;
  @Input() btn3Label: string;
  @Input() showBackBtn: boolean = true;

  @Output() btn1Click = new EventEmitter();
  @Output() btn2Click = new EventEmitter();
  @Output() btn3Click = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  navBack() {
    window.history.back();
  }

  btn1() {
    this.btn1Click.emit();
  }

  btn2() {
    this.btn2Click.emit();
  }

  btn3() {
    this.btn3Click.emit();
  }

}
