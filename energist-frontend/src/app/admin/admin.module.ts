import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { UserModule } from './users/user.module';
import { ProjectModule } from './projects/project.module';




const ADMIN_COMPONENTS = [
    AdminComponent,
];

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    DashboardModule,
    UserModule,
    ProjectModule
  ],
  declarations: [
    ...ADMIN_COMPONENTS,
  ],
})
export class AdminModule {
}
