import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-width-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-width-image.component.html',
  styleUrl: './full-width-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthImageComponent {
  src = signal<string | undefined>(undefined);
  state: 'show' | 'hide' = 'hide';

  @Input() set imageUrl(value: string | undefined) {
    if (!value) return;
    this.src.set(value);
    this.state = 'show';
  }

  @Output() hidden = new EventEmitter<void>();

  @HostListener('document:keydown.esc')
  onEscape(): void {
    this.hideImage();
  }

  @HostListener('transitionend', ['$event'])
  onTransitionEnd(event: TransitionEvent) {
    if (event.propertyName !== 'transform') return;
    if (this.state === 'hide') {
      this.hidden.emit();
    }
  }

  hideImage(): void {
    this.state = 'hide';
  }
}
