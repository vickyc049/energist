import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMapsComponent } from './maps.component';
import { GmapsComponent } from './gmaps/gmaps.component';


const routes: Routes = [{
  path: '',
  component: MyMapsComponent,
  children: [{
    path: 'gmaps',
    component: GmapsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMapsRoutingModule { }

export const routedComponents = [
  MyMapsComponent,
  GmapsComponent
];
