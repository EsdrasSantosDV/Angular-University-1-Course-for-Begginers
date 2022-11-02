import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //LISTA DE CURSOS PARA SER ITERADA
  courses=COURSES;


  onCourseSelected(course:Course) {
    console.log("App component - course selected",course);
  }
}
