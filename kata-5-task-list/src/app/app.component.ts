import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './tasks.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterOutlet, TaskComponent]
})
export class AppComponent {
  private fb = inject(FormBuilder);
  svc = inject(TasksService);

  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  addTask(): void {
    if (!this.taskForm.valid) return;

    const formValue = this.taskForm.value;
    this.svc.addTask({
      title: formValue.title!,
      description: formValue.description!,
    });

    this.taskForm.reset();
  }
}
