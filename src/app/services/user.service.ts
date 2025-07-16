import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { User, UsersResponse } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[] | 'error' | null> {
    return this.http.get<UsersResponse>(`${this.apiUrl}/users`).pipe(
      map((res) => res.users),
      catchError((err) => {
        console.error('Ошибка при загрузке пользователей', err);
        return of('error' as const);
      })
    );
  }

  getUserById(id: number): Observable<User | 'error' | null> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      catchError((err) => {
        console.error('Ошибка при загрузке пользователей', err);
        return of('error' as const);
      })
    );
  }
}
