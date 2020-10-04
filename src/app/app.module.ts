import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { ListpassengerComponent } from './listpassenger/listpassenger.component';
import { ViewallpassengerComponent } from './viewallpassenger/viewallpassenger.component';
import { ModelComponent } from './model/model.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpassengerComponent,
    ListpassengerComponent,
    ViewallpassengerComponent,
    ModelComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
