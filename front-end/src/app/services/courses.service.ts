import { Injectable } from '@angular/core';
import { Courses } from "../models/courses";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API: string = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Courses[]> {
    return this.httpClient.get<Courses[]>(this.API);
  }
}
