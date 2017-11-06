import { NgModule } from '@angular/core';

import { SystemUserComponent } from './systemuser.component';
import { HomeModule } from './home/home.module';
import { SystemUserRoutingModule } from './systemuser-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const SYSTEMUSER_COMPONENTS = [
    SystemUserComponent,
];

@NgModule({
  imports: [
    SystemUserRoutingModule,
    ThemeModule,
    HomeModule,
  ],
  declarations: [
    ...SYSTEMUSER_COMPONENTS,
  ],
})
export class SystemUserModule {
}
