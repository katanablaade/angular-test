import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtributeSelector } from '../atribute-selector/atribute-selector';

@Component({
  selector: 'app-button-2',
  imports: [[AtributeSelector]],
  templateUrl: './button-2.html',
  styleUrl: './button-2.scss',
})
export class Button2 {
  constructor(private router: Router) {}

  gotToPage1() {
    this.router.navigate(['/page-1']);
  }
}
