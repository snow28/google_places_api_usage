import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FormsModule} from "@angular/forms";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SearchboxComponent,
    OurClientsComponent,
    AdvantagesComponent,
    FooterComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
