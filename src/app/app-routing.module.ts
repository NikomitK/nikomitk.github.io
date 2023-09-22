import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardspaceComponent } from './cardspace/cardspace.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DetailedComponent } from './detailed/detailed.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full'},
  { path: 'projects', component: CardspaceComponent},
  { path: 'about', component: AboutMeComponent},
  { path: 'projects/:title', component: DetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
