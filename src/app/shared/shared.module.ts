import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent
  ],
  declarations: [PageComponent, PageHeaderComponent]
})
export class SharedModule { }
