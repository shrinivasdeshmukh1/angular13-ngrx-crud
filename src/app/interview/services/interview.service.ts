import { Interview } from './../model/interview.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class InterviewService {

  http: HttpClient;

  apiUrl: string = 'http://localhost:3000/interviews/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.apiUrl);
  }

  createInterview(interview: Interview): Observable<Interview> {
    return this.http.post<Interview>(this.apiUrl, interview);
  }

  deleteInterview(interviewId: string): Observable<any> {
    return this.http.delete(this.apiUrl + interviewId);
  }

  updateInterview(interview: Interview): Observable<any> {
    return this.http.put(this.apiUrl + interview.id, interview);
  }
}
