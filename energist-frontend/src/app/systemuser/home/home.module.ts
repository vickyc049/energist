import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    AngularEchartsModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
