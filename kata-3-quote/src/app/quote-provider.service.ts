import { Injectable } from '@angular/core';
import { Quote } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteProviderService {
  private readonly quotes: Quote[] = [
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      text: "Believe you can and you're halfway there.",
      author: 'Theodore Roosevelt',
    },
    {
      text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
    },
    {
      text: 'Hardships often prepare ordinary people for an extraordinary destiny.',
      author: 'C.S. Lewis',
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: 'Steve Jobs',
    },
    {
      text: 'The only limit to our realization of tomorrow will be our doubts of today.',
      author: 'Franklin D. Roosevelt',
    },
    {
      text: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
    },
    {
      text: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
    },
    {
      text: 'The only person you are destined to become is the person you decide to be.',
      author: 'Ralph Waldo Emerson',
    },
    {
      text: "Opportunities don't happen, you create them.",
      author: 'Chris Grosser',
    },
    {
      text: 'Failure will never overtake me if my determination to succeed is strong enough.',
      author: 'Og Mandino',
    },
    {
      text: 'Success is walking from failure to failure with no loss of enthusiasm.',
      author: 'Winston Churchill',
    },
    {
      text: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: 'Unknown',
    },
    {
      text: 'You are never too old to set another goal or to dream a new dream.',
      author: 'C.S. Lewis',
    },
    {
      text: 'Success is not the key to happiness. Happiness is the key to success.',
      author: 'Albert Schweitzer',
    },
  ];
  private quoteSubject = new BehaviorSubject<Quote | undefined>(undefined);
  readonly quote$ = this.quoteSubject.asObservable();

  generateQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.quoteSubject.next(this.quotes[randomIndex]);
  }
}
