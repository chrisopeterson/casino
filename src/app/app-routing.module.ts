import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackjackComponent } from './blackjack/blackjack.component'
import { CrapsComponent } from './craps/craps.component'

const routes: Routes = [
  {path: 'craps', component: CrapsComponent},
  {path: 'blackjack', component: BlackjackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
