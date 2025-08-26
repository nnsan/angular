import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  standalone: true,
  imports: [],
  template: `
    <div class="none-wrapper">
        <h2>None</h2>
        <div class="none-message">No encapsulation</div>
    </div>
  `,
  styles: [`
    h2, .none-message { 
        color: red; 
    }
    .none-wrapper {
        border: 2px solid red;
        padding: 10px;
        margin: 5px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent {}
