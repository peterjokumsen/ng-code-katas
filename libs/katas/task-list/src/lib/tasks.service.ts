import { Injectable, computed, signal } from '@angular/core';
import { Task } from './models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private state = signal<{ tasks: Task[]; lastAction: string }>({
    tasks: [
      {
        id: 0,
        title: 'Create a task',
        description: 'Fill in title and description, then click "Add task"',
        status: 'in progress',
      },
    ],
    lastAction: 'initialised',
  });

  tasks = computed(() => this.state().tasks);
  lastAction = computed(() => this.state().lastAction);

  addTask(task: Omit<Task, 'id' | 'status'>) {
    this.state.update((state) => {
      const id = Math.max(...state.tasks.map((t) => t.id), 0) + 1;
      return {
        ...state,
        lastAction: `added task '${task.title}'`,
        tasks: [...state.tasks, { ...task, id, status: 'open' as const }],
      };
    });
  }

  removeTask(id: number) {
    this.state.update((state) => ({
      ...state,
      lastAction: `removed task '${state.tasks.find((t) => t.id === id)
        ?.title}'`,
      tasks: state.tasks.filter((t) => t.id !== id),
    }));
  }

  updateTask(id: number, task: Partial<Task>) {
    this.state.update((state) => ({
      ...state,
      lastAction: `updated task '${state.tasks.find((t) => t.id === id)
        ?.title}'`,
      tasks: state.tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)),
    }));
  }
}
