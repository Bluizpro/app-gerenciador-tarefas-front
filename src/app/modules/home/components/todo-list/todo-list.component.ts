import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]");
  constructor() { }
  ngDoCheck() {
    this.setLocalStorage();
  
}
  public deteleItemTaskList(event: number) {

    this.taskList.splice(event, 1);
  }
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja excluir todos os itens da lista?');
    if (confirm) {
      this.taskList = [];
    }
  }
  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm('Tarefa Vazia deseja excluir este item da lista?');
      if (confirm) {
        this.deteleItemTaskList(index);
      }

    }
  }
  public setLocalStorage() {
    if(this.taskList){
      this.taskList.sort((first, lest) => Number(first.checked) - Number(lest.checked)); {
        localStorage.setItem('list', JSON.stringify(this.taskList));
      }
    }
  }
}

