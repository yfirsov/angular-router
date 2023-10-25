import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerService } from '../flower.service';
import { LeafService } from '../leaf.service';
import { HostChildComponent } from '../host-child/host-child.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule, HostChildComponent],
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  viewProviders: [{ provide: FlowerService, useValue: { emoji: 'HOST🌷' } }],
  providers: [{ provide: LeafService, useValue: { emoji: 'HOST🌿' } }],
})
export class HostComponent {
  constructor(
    @SkipSelf() @Host() @Optional() private flower: FlowerService,
    @SkipSelf() @Host() @Optional() private leaf: LeafService
  ) {}

  get flowerEmoji() {
    return this.flower?.emoji;
  }

  get leafEmoji() {
    return this.leaf?.emoji;
  }
}
