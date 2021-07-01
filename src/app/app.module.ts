import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { NavPopupDialogComponent } from './components/navbar/nav-popup-dialog/nav-popup-dialog.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

import {
  NgbModule,
  NgbCollapse,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgDialogAnimationService } from 'ng-dialog-animation';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  MatRippleModule,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core'

import { globalRippleConfig } from './config/config';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    NavPopupDialogComponent,
    ButtonComponent,
    CarouselComponent,
    HomeComponent,
    ContactUsComponent,
    ListCardComponent,
    SocialIconComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_IqP4L2d8rSIkgt1M0ak0BIh3ZlTAADo',
    }),
  ],
  providers: [
    NgDialogAnimationService,
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
