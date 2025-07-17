import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { LoadState, User } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getUsers(searchQuery: string): Observable<LoadState<User[]>> {
    let url = `${this.apiUrl}/users?limit=200`;
    if (searchQuery) {
      url = `${this.apiUrl}/users/search?q=${searchQuery}`;
    }
    return this.http.get<{ users: User[] }>(url).pipe(
      map((res) => res.users),
      catchError((err) => {
        console.error('Ошибка при загрузке пользователей', err);
        return of('error' as const);
      })
    );
  }

  getUserById(id: number): Observable<LoadState<User>> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      catchError((err) => {
        console.error('Ошибка при загрузке пользователей', err);
        return of('error' as const);
      })
    );
  }
}
