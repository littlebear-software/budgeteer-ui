import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() width: number = 1;
  @Input() height: number = 1;
  @HostBinding('class.span-2-row') get span2row() { return this.width === 2 };
  @HostBinding('class.span-3-row') get span3row() { return this.width === 3 };
  @HostBinding('class.span-2-col') get span2col() { return this.height === 2 };
  @HostBinding('class.span-3-col') get span3col() { return this.height === 3 };
}
