import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TechDevsAuthService } from './services/techdevs-auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TechDevsAccountsService } from './services/techdevs-accounts.service';
import { MobileService } from './services/mobile.service';
import { TechDevsClientThemeService } from './services/techdevs-client-theme.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    TechDevsAuthService,
    TechDevsAccountsService,
    MobileService,
    AuthGuard,
    TechDevsClientThemeService
  ]
})
export class CoreModule { }
