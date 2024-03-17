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
import { catchError, Observable, of } from "rxjs";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { AsyncPipe, NgIf } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { MatIcon } from "@angular/material/icon";
import { CategoryPipe } from "../../pipes/category.pipe";

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
    MatToolbar,
    MatProgressSpinner,
    NgIf,
    AsyncPipe,
    MatIcon,
    CategoryPipe
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];
  courses$: Observable<Courses[]>;

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.findAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.')
          return of([])
        })
      );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    })
  }

  ngOnInit(): void {

  }
}
