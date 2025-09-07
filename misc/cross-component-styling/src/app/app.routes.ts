import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./parent/parent.component').then(m => m.ParentComponent)
    },
    {
        path: 'child',
        loadComponent: () => import('./child/child.component').then(m => m.ChildComponent)
    },
    {
        path: 'grand-child',
        loadComponent: () => import('./grand-child/grand-child.component').then(m => m.GrandChildComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
