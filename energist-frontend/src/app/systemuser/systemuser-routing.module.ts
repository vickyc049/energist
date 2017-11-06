import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SystemUserComponent } from './systemuser.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: SystemUserComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemUserRoutingModule {
}
