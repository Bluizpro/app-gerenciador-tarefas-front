import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: 'Task 1', checked: true },
    { task: 'Task 2', checked: false },
  ];
  constructor() { }
  ngOnInit(): void {

  }
  public deteleItemTaskList(event: number) {

    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja excluir todos os itens da lista?');
    if (confirm) {
      this.taskList = [];
    }
  }

}
