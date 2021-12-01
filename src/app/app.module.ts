import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DarkButtonComponent } from './shared/dark-button/dark-button.component';
import { AberturaComponent } from './abertura/abertura.component';
import { EncapComponent } from './abertura/encap/encap.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DarkButtonComponent,
    AberturaComponent,
    EncapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
