import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <div>
      <h2>
        parent works!
      </h2>
      <button>Action</button>
      <hr/>
      <app-child></app-child>
    </div>
  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

}
