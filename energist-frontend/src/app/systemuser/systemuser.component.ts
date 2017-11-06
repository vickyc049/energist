import { Component } from '@angular/core';

import { MENU_ITEMS } from './systemuser-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class SystemUserComponent {
  menu = MENU_ITEMS;
}
