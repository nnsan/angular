import { Component } from '@angular/core';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';

@Component({
  selector: 'app-first-demo',
  standalone: true,
  imports: [ShadowDomEncapsulationComponent],
  template: `
    <h2>The first-demo works!</h2>
    <app-shadow-dom-encapsulation></app-shadow-dom-encapsulation>
  `,
  styles: [``]
})
export class FirstDemoComponent {

}
