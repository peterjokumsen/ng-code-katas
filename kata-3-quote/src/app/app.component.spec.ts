import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { QuoteProviderService } from './quote-provider.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    const quoteSvc: Partial<QuoteProviderService> = {
      quote$: of(undefined),
      generateQuote: () => {},
    };

    await TestBed.configureTestingModule({
      providers: [{ provide: QuoteProviderService, useValue: quoteSvc }],
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
