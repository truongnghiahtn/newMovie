import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';


const routes: Routes = [
 {
   path:"",
   loadChildren:"./entities/entities.module#EntitiesModule"
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
