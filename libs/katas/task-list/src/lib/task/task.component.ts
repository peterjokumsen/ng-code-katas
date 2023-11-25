import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Task, TaskStatus } from '../models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  private readonly statusLabels: Record<TaskStatus, string> = {
    open: 'Open',
    'in progress': 'In Progress',
    done: 'Done',
  };
  private readonly statuses = Object.keys(this.statusLabels) as TaskStatus[];

  private fb = inject(FormBuilder);
  private _task!: Task;

  @Input() set task(value: Task) {
    if (!value) return;
    this._task = value;
    this.updateForm.reset(value);
  }

  get task(): Task {
    return this._task;
  }

  @Output() saveTask = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<number>();

  updateForm = this.fb.group({
    title: [''],
    description: [''],
  });

  get previousStatus(): string | undefined {
    const status = this.getStatus('back');
    if (!status) return undefined;
    return this.statusLabels[status];
  }

  get nextStatus(): string | undefined {
    const status = this.getStatus('forward');
    if (!status) return undefined;
    return this.statusLabels[status];
  }

  get currentStatus(): string {
    return this.statusLabels[this.task.status];
  }

  private getStatus(direction: 'back' | 'forward'): TaskStatus | undefined {
    const currentIndex = this.statuses.indexOf(this.task.status);
    const newIndex = currentIndex + (direction === 'back' ? -1 : 1);
    if (newIndex < 0 || newIndex >= this.statuses.length) return undefined;
    return this.statuses[newIndex];
  }

  shiftStatus(direction: 'back' | 'forward'): void {
    const status = this.getStatus(direction);
    if (status) this.saveTask.emit({ ...this.task, status });
  }

  deleteTask(): void {
    this.removeTask.emit(this.task.id);
  }

  updateTask(): void {
    if (!this.updateForm.valid) return;
    const { title, description } = this.updateForm.value;
    this.saveTask.emit({
      ...this.task,
      title: title ?? this.task.title,
      description: description ?? this.task.description,
    });
  }
}
