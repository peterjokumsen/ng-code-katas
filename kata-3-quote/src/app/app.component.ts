import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuoteProviderService } from './quote-provider.service';
import { Observable } from 'rxjs';
import { Quote } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quoteSvc = inject(QuoteProviderService);

  quote$: Observable<Quote | undefined> = this.quoteSvc.quote$;
}
