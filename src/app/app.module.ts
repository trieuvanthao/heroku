import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';
import {HeaderComponent} from './shared/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NgxLoadingModule} from 'ngx-loading';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    AuthModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
