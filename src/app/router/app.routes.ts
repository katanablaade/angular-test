import { Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list';
import { UserDetailComponent } from '../components/user-detail/user-detail';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
