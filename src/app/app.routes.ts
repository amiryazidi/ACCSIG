import { Routes } from '@angular/router';
import { Product } from './product/product';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

  { path : '' , redirectTo :'product' , pathMatch:'full' },
  {
    path: 'events',
    loadChildren: () =>
      import ('./events/events.routes').then(m=>m.EventRoutes)
  },
  { path : 'product' , component : Product},
  { path : '**' , component:NotFound}

];
