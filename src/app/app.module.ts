import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllColorsDisplayComponent } from './components/all-colors-display/all-colors-display.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttperrorinterceptorService} from './services/httperrorinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AllColorsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttperrorinterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
