import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { MapCardComponent } from './map-card/map-card.component';



@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    MapCardComponent
  ],
})
export class DashboardModule { }
