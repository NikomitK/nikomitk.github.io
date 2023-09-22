import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardspaceComponent } from './overview/cardspace/cardspace.component';
import { AboutMeComponent } from './about/about-me/about-me.component';

const routes: Routes = [
  { path: "", component: CardspaceComponent},
  { path: "about", component: AboutMeComponent},
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
