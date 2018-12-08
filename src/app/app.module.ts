import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { CrapsComponent } from './craps/craps.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackjackComponent,
    CrapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }