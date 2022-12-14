import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course:Course;
  @Input () cardIndex:number;

  @Output()courseSelected=new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {


  }

  onCourseViewed() {
    console.log("card-component - button clicked");
    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }



  cardClasses() {
      if(this.course.category=='BEGINNER')
      {
        return 'beginner';
      }

  }

  cardStyles() {
   return {
     'font-size':'30px'};
  }
}
