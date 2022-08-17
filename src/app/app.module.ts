import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateMePuzzleComponent } from './date-me-puzzle/date-me-puzzle.component';
import { DateMeYesComponent } from './date-me-yes/date-me-yes.component';

@NgModule({
  declarations: [
    AppComponent,
    DateMePuzzleComponent,
    DateMeYesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
