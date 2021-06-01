import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './cards/card/card.component';
import { TypingGameComponent } from './typing-game/typing-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    TypingGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
