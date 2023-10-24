import { Component } from '@angular/core';

@Component({
    selector: 'app-child-a',
    templateUrl: './child-a.component.html',
    styleUrls: ['./child-a.component.css'],
    standalone: true
})
export class ChildAComponent {
  title = 'I AM VIEW CHILD';
}
