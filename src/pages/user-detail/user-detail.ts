import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { SpinnerComponent } from '../../components/spinner/spinner';
import { ErrorComponent } from '../../components/error/error';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, SpinnerComponent, ErrorComponent],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent {
  userService = inject(UserService);
  route = inject(ActivatedRoute);
  id = computed(() => {
    const param = this.route.snapshot.paramMap.get('id');
    return param ? +param : null;
  });

  userData = toSignal(this.userService.getUserById(this.id() ?? -1), {
    initialValue: 'loading' as const,
  });

  isLoading = computed(() => this.userData() === 'loading');
  isError = computed(() => this.userData() === 'error');
  user = computed(() => {
    const data = this.userData();
    if (data === 'loading' || data === 'error') {
      return null;
    }
    return data;
  });
}
