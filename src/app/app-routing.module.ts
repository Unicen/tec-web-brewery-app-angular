import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  { path: '',redirectTo: 'beers',pathMatch: 'full' },
  { path: 'beers', component: BeersComponent },
  { path: 'about', component: AboutUsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
