import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { EditTextComponent } from './edit-text/edit-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageHeaderComponent,
    EditTextComponent
  ],
  declarations: [PageComponent, PageHeaderComponent, EditTextComponent]
})
export class SharedModule { }
