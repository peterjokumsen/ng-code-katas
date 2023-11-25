import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TaskComponent } from '../task/task.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
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
