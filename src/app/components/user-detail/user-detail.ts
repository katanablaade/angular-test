import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../types/types';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner';
import { ErrorComponent } from '../error/error';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, SpinnerComponent, ErrorComponent],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetailComponent {
  user$: Observable<User | null | 'error'>;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.user$ = this.userService.getUserById(id);
  }
}
