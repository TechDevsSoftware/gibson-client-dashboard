import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
  declarations: [ClientListComponent, ClientNewComponent, ClientDetailComponent]
})
export class ClientModule { }
