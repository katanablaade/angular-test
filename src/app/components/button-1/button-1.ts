import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtributeSelector } from '../atribute-selector/atribute-selector';

@Component({
  selector: 'app-button-1',
  imports: [[AtributeSelector]],
  templateUrl: './button-1.html',
  styleUrl: './button-1.scss',
})
export class Button1 {
  constructor(private router: Router) {}

  gotToPage2() {
    this.router.navigate(['/page-2']);
  }
}
