import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { QuoteProviderService } from '../quote-provider.service';
import { Quote } from '../models';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  quoteSvc = inject(QuoteProviderService);

  quote$: Observable<Quote | undefined> = this.quoteSvc.quote$;
}
