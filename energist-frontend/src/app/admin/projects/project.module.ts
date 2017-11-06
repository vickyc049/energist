import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProjectComponent } from './project.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ProjectComponent
  ],
})
export class ProjectModule { }
