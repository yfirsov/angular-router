import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentComponent } from './parent/parent.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HighlightDirective,
    RouterLink,
    RouterLinkActive,
    ParentComponent,
    ChildBComponent,
    RouterOutlet,
    BillingInfoComponent,
    MatToolbarModule,
  ],
})
export class AppComponent {
  color = 'yellow';
}
