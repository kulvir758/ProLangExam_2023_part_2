import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  teachers: any[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  

}
