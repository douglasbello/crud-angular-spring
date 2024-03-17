import { Component, OnInit } from '@angular/core';
import { Courses } from "../../models/courses";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatToolbar } from "@angular/material/toolbar";
import { CoursesService } from "../../services/courses.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatToolbar
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];
  courses: Observable<Courses[]>;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.findAll();
  }

  ngOnInit(): void {

  }
}
