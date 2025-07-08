import { Component, HostListener } from '@angular/core';

@Component({
  selector: '[app-atribute-selector]',
  imports: [],
  template: '<ng-content></ng-content>',
})
export class AtributeSelector {
  @HostListener('click') onClick() {
    console.log('Клик');
  }
}
