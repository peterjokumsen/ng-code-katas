import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'ng-katas-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  katas: Array<{ name: string; path: string }> = [
    { name: 'Counter', path: 'kata-1' },
    { name: 'Calculator', path: 'kata-2' },
  ];
}
