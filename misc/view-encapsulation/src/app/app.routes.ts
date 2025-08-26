import { Routes } from '@angular/router';
import { FirstDemoComponent } from './first-demo/first-demo.component';

export const routes: Routes = [
  { path: 'first-demo', component: FirstDemoComponent },
  { path: '', redirectTo: '/first-demo', pathMatch: 'full' }
];
