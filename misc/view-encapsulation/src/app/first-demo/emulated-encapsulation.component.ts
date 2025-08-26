import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from './no-encapsulation.component';

@Component({
  selector: 'app-emulated-encapsulation',
  standalone: true,
  imports: [NoEncapsulationComponent],
  template: `
    <div class="emulated-wrapper">
        <h2>Emulated</h2>
        <div class="emulated-message">Emulated encapsulation</div>
        <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: [`
    h2, .emulated-message { 
        color: green; 
    }
    .emulated-wrapper {
        border: solid 2px green;
        padding: 10px;
        margin: 5px;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated //default
})
export class EmulatedEncapsulationComponent {}
