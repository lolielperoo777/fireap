import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: Menu[];
}

const SUBMENU_MANTENIMIENTO = [
  { state: 'opcion1', name: 'Opción 1', type: 'link', icon: 'sub-menu-icon' },
  { state: 'opcion2', name: 'Opción 2', type: 'link', icon: 'sub-menu-icon' },
];

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  {
    state: 'mantenimiento',
    type: 'sub',
    name: 'Mantenimiento',
    icon: 'build',
    children: SUBMENU_MANTENIMIENTO,
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
