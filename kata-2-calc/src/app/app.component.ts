import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map, startWith } from 'rxjs/operators';

interface CalcOperator {
  key: string;
  label: string;
  operation: (a: number, b: number) => number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterOutlet]
})
export class AppComponent implements AfterViewInit {
  private formBuilder = inject(FormBuilder);

  readonly operators: CalcOperator[] = [
    { key: 'plus', label: 'Add', operation: (a, b) => a + b },
    { key: 'minus', label: 'Subtract', operation: (a, b) => a - b },
    { key: 'multiply', label: 'Multiply', operation: (a, b) => a * b },
    { key: 'divide', label: 'Divide', operation: (a, b) => a / b },
    { key: 'mod', label: 'Modulus', operation: (a, b) => a % b },
  ];

  @ViewChildren('numberInput') numberInputs: QueryList<ElementRef> | undefined;

  calcFormGroup = this.formBuilder.group({
    firstNumber: ['', [Validators.required]],
    secondNumber: ['0', [Validators.required]],
    operator: 'plus',
  });

  result$ = this.calcFormGroup.valueChanges.pipe(
    map(({ firstNumber, secondNumber, operator }) => {
      const first = parseFloat(firstNumber ?? '0');
      const second = parseFloat(secondNumber ?? '0');
      const selectedOperator = this.operators.find(op => op.key === operator);
      return selectedOperator?.operation(first, second) ?? 0;
    }),
    map((result) => (isNaN(result) ? '🤖 could not compute' : `${result}`)),
    catchError(() => ['Something went wrong 🤷‍♂️']),
  );

  ngAfterViewInit(): void {
    this.numberInputs?.first?.nativeElement?.focus();
  }
}
