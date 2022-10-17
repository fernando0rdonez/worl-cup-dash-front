import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CreateCoutryComponent } from './create-coutry/create-coutry.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoutryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
