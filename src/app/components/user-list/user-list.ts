import { Component } from '@angular/core';
import { User } from '../../types/types';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner';
import { ErrorComponent } from '../error/error';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule, SpinnerComponent, ErrorComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserListComponent {
  users$: Observable<User[] | null | 'error'>;

  constructor(private userService: UserService, private router: Router) {
    this.users$ = this.users$ = this.userService.getUsers();
  }

  viewDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
