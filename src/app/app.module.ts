import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ShortlinkService} from "./shortlink.service";
import { LoginComponent } from './login/login.component';
import { ShortlinkListComponent } from './shortlink-list/shortlink-list.component';
import {FormsModule} from "@angular/forms";
import { ShortlinkComponent } from './shortlink/shortlink.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditShortlinkComponent } from './create-shortlink/edit-shortlink.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShortlinkListComponent,
    ShortlinkComponent,
    EditShortlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ShortlinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
