import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  task: Task | null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = data?.task || null; 
    this.taskForm = this.fb.group({
      title: [this.task?.title || '', Validators.required],
      description: [this.task?.description || '', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.task) {
        this.taskService.updateTask(this.task.id!, this.taskForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.taskService.createTask(this.taskForm.value).subscribe(() => {
          this.dialogRef.close(true); 
        });
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
