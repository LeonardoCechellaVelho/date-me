import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateMePuzzleComponent } from './date-me-puzzle/date-me-puzzle.component';
import { DateMeVideoComponent } from './date-me-video/date-me-video.component';
import { DateMeYesComponent } from './date-me-yes/date-me-yes.component';

const routes: Routes = [
  { path: '', redirectTo: '/video', pathMatch: 'full' },
  { path: 'video', component: DateMeVideoComponent },
  { path: 'date', component: DateMePuzzleComponent },
  { path: 'accept', component: DateMeYesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
