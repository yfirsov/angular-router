import { Component } from '@angular/core';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentComponent } from './parent/parent.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone: true,
  imports: [ HighlightDirective, RouterLink, RouterLinkActive, ParentComponent, ChildBComponent, RouterOutlet ]
})
export class AppComponent {
  title = 'Angular Router';
  color = 'yellow';
}
