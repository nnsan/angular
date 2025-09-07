import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>
        grand-child works!
      </h2>
      <button>Action</button>
    </div>
  `,
  styleUrl: './grand-child.component.scss'
})
export class GrandChildComponent {

}
