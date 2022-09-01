import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INTERVIEW_STORE_NAME } from './interview.actions';
import { InterviewState } from './interview.reducers';

export const getAllInterviewsSelector = createSelector(createFeatureSelector(INTERVIEW_STORE_NAME), (state: InterviewState) => state.interviews);