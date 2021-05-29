import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BtnWithLoadingComponent } from '@components/btn-with-loading/btn-with-loading.component';
import { LoadingOverlayComponent } from '@components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { PageLoaderComponent } from '@components/page-loader/page-loader.component';
import { SocialLoginBtnComponent } from '@components/social-login-btn/social-login-btn.component';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    SocialLoginBtnComponent,
    BtnWithLoadingComponent,
    LoadingOverlayComponent,
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbNavModule,
    NgbDropdownModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent,
    SocialLoginBtnComponent,
    BtnWithLoadingComponent,
    LoadingOverlayComponent,
    PageLoaderComponent
  ]
})
export class ComponentsModule {}
