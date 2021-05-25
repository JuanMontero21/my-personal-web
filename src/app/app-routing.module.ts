import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// Modules
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes, {useHash: true} ),
    PagesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
