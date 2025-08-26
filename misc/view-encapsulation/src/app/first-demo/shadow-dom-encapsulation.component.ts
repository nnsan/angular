import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  standalone: true,
  imports: [NoEncapsulationComponent, EmulatedEncapsulationComponent],
  template: `
    <div class="shadow-dom-wrapper">
      <h2>ShadowDom</h2>
      <div class="shadow-message">Shadow DOM encapsulation</div>
      <app-emulated-encapsulation></app-emulated-encapsulation>
      <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: [`
    h2, .shadow-message {
      color: blue;
    }
    .shadow-dom-wrapper {
      border: 2px solid blue; 
      padding: 10px; 
      margin: 5px;
    }
 `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {}
