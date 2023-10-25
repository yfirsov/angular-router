import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBComponent } from '../child-b/child-b.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule, ChildBComponent, ParentComponent],
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent {}
