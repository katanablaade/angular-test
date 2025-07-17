import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { User } from '../../types/types';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner';
import { ErrorComponent } from '../error/error';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule, SpinnerComponent, ErrorComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  userService = inject(UserService);
  router = inject(Router);

  usersData = toSignal(this.userService.getUsers(), {
    initialValue: 'loading' as const,
  });

  isLoading = computed(() => this.usersData() === 'loading');
  isError = computed(() => this.usersData() === 'error');
  users = computed((): User[] => {
    const data = this.usersData();
    if (data === 'loading' || data === 'error') {
      return [];
    }
    return data;
  });

  viewDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
