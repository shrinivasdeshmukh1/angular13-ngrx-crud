import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { InterviewService } from 'src/app/interview/services/interview.service';
import {
  getInterviews,
  getInterviewsSuccess,
  addInterviews,
  addInterviewsSuccess,
  deleteInterview,
  deleteInterviewSuccess,
  updateInterview,
  updateInterviewSuccess,
  InterviewAction
} from './interview.actions';

@Injectable()
export class InterviewEffects {
  loadInterview$ = createEffect(() =>
    this.action$.pipe(
      ofType(InterviewAction.GET_INTERVIEWS),
      exhaustMap(() =>
        this.interviewService.getAllInterviews().pipe(
          map((interviews) => ({
            type: InterviewAction.GET_INTERVIEWS_SUCCESS,
            interviews: interviews
          }))
        )
      )
    )
  );

  addInterview$ = createEffect(() =>
    this.action$.pipe(
      ofType(addInterviews),
      tap((interview) => console.log(interview)),
      concatMap(({ interview }) =>
        this.interviewService.createInterview(interview).pipe(
          map((interview) => addInterviewsSuccess(interview))
        )
      )
    )
  );

  deleteInterview$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteInterview),
      mergeMap(({ interviewId }) =>
        this.interviewService.deleteInterview(interviewId).pipe(
          map(() => deleteInterviewSuccess(interviewId))
        )
      )
    )
  );

  updateInterview$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateInterview),
      concatMap(({ interview }) =>
        this.interviewService.updateInterview(interview).pipe(
          map(() => updateInterviewSuccess(interview))
        )
      )
    )
  );

  constructor(private action$: Actions, private interviewService: InterviewService) {}
}