//TaskFlow-Frontend\src\app\task\task-list\task-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../core/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private taskService: TaskService, private dialog: MatDialog) {
    this.tasks = new MatTableDataSource<Task>([]); 
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks.data = tasks;
      this.tasks.paginator = this.paginator;
    });
  }

  openForm(task: any = null) {
    const dialogRef = this.dialog.open(TaskFormComponent, { data: { task } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.loadTasks();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
