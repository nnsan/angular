import { Component } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  template: `
    <div>
      <h2>
        child works!
      </h2>
      <button>Click me</button>
      <hr/>
      <app-grand-child class="dark"></app-grand-child>
    </div>
  `,
  styleUrl: './child.component.scss'
})
export class ChildComponent {

}
