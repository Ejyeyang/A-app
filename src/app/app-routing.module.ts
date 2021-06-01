import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { TypingGameComponent } from './typing-game/typing-game.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path: 'cards', component: CardsComponent},
  {path: 'typing', component: TypingGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
