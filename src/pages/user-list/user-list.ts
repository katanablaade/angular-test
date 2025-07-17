import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { User } from '../../types/types';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap, tap } from 'rxjs';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { ErrorComponent } from '../../components/error/error';
import { SearchInput } from '../../components/search-input/search-input';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    RouterModule,
    SpinnerComponent,
    ErrorComponent,
    SearchInput,
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  userService = inject(UserService);
  router = inject(Router);

  searchQuery = signal('');
  isSearching = signal(false);
  usersData = toSignal(
    toObservable(this.searchQuery).pipe(
      debounceTime(500),
      tap(() => this.isSearching.set(true)),
      switchMap((query) => this.userService.getUsers(query)),
      tap(() => this.isSearching.set(false))
    ),
    { initialValue: 'loading' as const }
  );

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
  onSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
