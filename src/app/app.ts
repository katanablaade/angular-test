import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'angular-test';

  public posts$: Observable<Post[]> = of([]);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  ngOnInit(): void {
    this.posts$ = this.getUsers();
  }
}
