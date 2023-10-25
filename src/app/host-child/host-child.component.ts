import { Component, Host, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerService } from '../flower.service';
import { LeafService } from '../leaf.service';

@Component({
  selector: 'app-host-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css'],
})
export class HostChildComponent {
  constructor(
    @Optional() @Host() private flower: FlowerService,
    @Optional() @Host() private leaf: LeafService
  ) {}

  get flowerEmoji() {
    return this.flower?.emoji;
  }

  get leafEmoji() {
    return this.leaf?.emoji;
  }
}
