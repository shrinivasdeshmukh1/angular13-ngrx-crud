import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Interview } from './../../model/interview.model';
import { InterviewService } from './../../services/interview.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { InterviewState } from '../../store/interview.reducers';
import { getAllInterviewsSelector } from '../../store/interview.selectors';
import { deleteInterview, getInterviews, updateInterview } from '../../store/interview.actions';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html'
})
export class InterviewsListComponent implements OnInit {

  interviews$: any;
  interviewToBeUpdated: any;
  isUpdateActivated = false;
  private subscriptions: Array<Subscription> = new Array<Subscription>(); 

  constructor(private interviewService: InterviewService, 
    private store: Store<InterviewState>,
    private interviewStore: Store<InterviewState> ) {
    this.subscriptions.push(this.interviewStore.select(getAllInterviewsSelector).subscribe((data: any) => {
      console.log(data)
      this.interviews$ = (data?.length > 0)? data : [];
    }));
  }

  ngOnInit() {
    this.interviewStore.dispatch(getInterviews());
    this.interviewToBeUpdated = {};
  }

  ngOnDestroy() {
    this.subscriptions.map(item => item.unsubscribe());
  }

  deleteInterview(interviewId: string) {
    this.interviewStore.dispatch(deleteInterview(interviewId));
    setTimeout(()=> {
      this.interviewStore.dispatch(getInterviews());
    });
  }

  showUpdateForm(interview: Interview) {
    this.interviewToBeUpdated = {...interview};
    this.isUpdateActivated = true;
  }

  updateInterview(updateForm: any) {
    const m = {
      id: this.interviewToBeUpdated.id,
      ...updateForm.value 
    };
    console.log(m)
    this.store.dispatch(updateInterview(m));

    this.isUpdateActivated = false;
    this.interviewToBeUpdated = {};
    setTimeout(()=> {
      this.interviewStore.dispatch(getInterviews());
    });
  }
}
