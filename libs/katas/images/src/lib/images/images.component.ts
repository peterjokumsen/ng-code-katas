import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthImageComponent } from '../full-width-image/full-width-image.component';

@Component({
  standalone: true,
  imports: [CommonModule, FullWidthImageComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss',
})
export class ImagesComponent {
  private numbers = Array(10)
    .fill(0)
    .map((x, i) => i + 1);

  imageUrls = this.numbers.map(
    (x) => `assets/image-kata/images/0${x < 10 ? '0' + x : x}.svg`,
  );
  selectedImage = signal<string | undefined>(undefined);
}
