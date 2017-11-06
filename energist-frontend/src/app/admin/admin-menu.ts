import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'System Users',
    icon: 'nb-person',
    link: '/admin/users',
    home: true,
  },
   {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/admin/maps/gmaps',
      },
    ],
  },
  {
    title: 'Projects',
    icon: 'nb-roller-shades',
    link: '/admin/projects',
    home: true,
  },
];
