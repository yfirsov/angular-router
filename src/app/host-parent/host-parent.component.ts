import { Component, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafService } from '../leaf.service';
import { FlowerService } from '../flower.service';
import { HostComponent } from '../host/host.component';
import { HostChildComponent } from '../host-child/host-child.component';

@Component({
  selector: 'app-host-parent',
  standalone: true,
  imports: [CommonModule, HostComponent, HostChildComponent],
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.css'],
  viewProviders: [
    { provide: FlowerService, useValue: { emoji: 'HOST-PARENT🌺' } },
    { provide: LeafService, useValue: { emoji: 'HOST-PARENT🌿' } },
  ],
})
export class HostParentComponent {
  constructor(
    @SkipSelf() private flower: FlowerService,
    @SkipSelf() private leaf: LeafService
  ) {}

  get flowerEmoji() {
    return this.flower?.emoji;
  }

  get leafEmoji() {
    return this.leaf?.emoji;
  }
}
