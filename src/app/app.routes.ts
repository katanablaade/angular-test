import { Routes } from '@angular/router';
import { Page1 } from './pages/page-1/page-1';
import { Page2 } from './pages/page-2/page-2';

export const routes: Routes = [
  { path: '', redirectTo: '/page-1', pathMatch: 'full' },
  { path: 'page-1', component: Page1 },
  { path: 'page-2', component: Page2 },
  { path: '**', redirectTo: '/page-1', pathMatch: 'full' },
];
