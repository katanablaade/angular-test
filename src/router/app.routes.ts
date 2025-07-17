import { Routes } from '@angular/router';
import { UserListComponent } from '../pages/user-list/user-list';
import { UserDetailComponent } from '../pages/user-detail/user-detail';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
