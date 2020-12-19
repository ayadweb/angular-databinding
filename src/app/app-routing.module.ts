import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcComponent } from './pc/pc.component';

const routes: Routes = [
  {path:'pc', component:PcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
