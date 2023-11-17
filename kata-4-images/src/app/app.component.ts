import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FullWidthImageComponent } from "./full-width-image/full-width-image.component";
import { BehaviorSubject, tap } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FullWidthImageComponent]
})
export class AppComponent {
  private numbers = Array(10).fill(0).map((x, i) => i + 1);

  imageUrls = this.numbers.map((x) => `assets/images/0${x < 10 ? '0' + x : x}.svg`);
  selectedImage = signal<string | undefined>(undefined);
}
