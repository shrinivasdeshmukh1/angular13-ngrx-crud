import { Interview } from './../../model/interview.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { InterviewState } from '../../store/interview.reducers';
import { addInterviews } from '../../store/interview.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html'
})
export class ScheduleInterviewComponent implements OnInit {

  constructor(private store: Store<InterviewState>,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(submittedForm: any) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const interview: Interview = { id: uuid.v4(), name: submittedForm.value.name, schedule: submittedForm.value.schedule, skills: submittedForm.value.skills };
    this.store.dispatch(addInterviews(interview));
    this.router.navigate(['/list-interviews']);

  }
}
