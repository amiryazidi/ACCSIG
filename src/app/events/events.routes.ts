import { Routes } from "@angular/router";

export const EventRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./event-list/event-list')
        .then(m => m.EventList)
  },

  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./event-detail/event-detail')
        .then(m => m.EventDetail)
  },
  {
    path : 'add',
    loadComponent: () =>
      import('./event-add/event-add')
        .then(m => m.EventAdd)
  },

];

