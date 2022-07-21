import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(private readonly courseService: CourseService) {}
  title = 'List of courses';

  courses = this.courseService.getCourses();

  ngOnInit(): void {}
}
