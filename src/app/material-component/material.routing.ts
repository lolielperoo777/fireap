import { Routes } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ForSubestacionComponent } from './for-subestacion/for-subestacion.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { Spt01Component } from './spt01/spt01.component';
import { Spt02Component } from './spt02/spt02.component';



export const MaterialRoutes: Routes = [

  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: 'for-subestacion',
    component: ForSubestacionComponent
  },
  {
    path: 'spt01',
    component: Spt01Component
  },
  {
    path: 'spt02',
    component: Spt02Component
  },

  { path: 'not-found', component: NotFoundComponentComponent },
  { path: 'assets/**', redirectTo: '/not-found' }

  /*
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },

  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
 */
];
