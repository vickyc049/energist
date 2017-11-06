import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './users/user.component';
import { ProjectComponent } from './projects/project.component';



const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MyMapsModule',
  }, 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
