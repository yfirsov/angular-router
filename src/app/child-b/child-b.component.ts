import { Component } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css'],
  standalone: true,
})
export class ChildBComponent {
  title = 'I AM CONTENT CHILD';
}
