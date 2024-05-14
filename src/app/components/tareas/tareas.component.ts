import { Component } from '@angular/core';
import { Tarea } from '../../models/tareas';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

 public taskList: Tarea[] = [];
 public taskName:string="";

addTask(){
  if (this.taskName.trim()){
  const tarea:Tarea = new Tarea(this.taskName, false);
  /* const tarea2:Tarea = {
    nombre: this.taskName,
    estado: false
  } */
   this.taskList.push(tarea);
  this.taskName="";
}else {
  alert('Debes introducir una tarea valida.')
}
}
deleteTask(index:number){
  this.taskList.splice(index,1);//si no le pongo la posicion elimina todo

}
changeState(index:number){
  this.taskList[index].estado = !this.taskList[index].estado;
  console.log(this.taskList[index].estado)
}

}
