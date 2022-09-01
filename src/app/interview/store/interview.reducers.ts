import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Interview } from '../model/interview.model';
import {
  getInterviewsSuccess,
  addInterviewsSuccess,
  deleteInterviewSuccess,
  updateInterviewSuccess,
  getInterviews,
} from './interview.actions';

export interface InterviewState {
  interviews: ReadonlyArray<Interview>;
}

export const initialState: ReadonlyArray<Interview> = [];

export const _interviewReducer = createReducer(
  initialState,
  on(getInterviewsSuccess, (state, action) => { 
    return { ...state, interviews: action.interviews }
  }),
  on(addInterviewsSuccess, (state: any, { interview }) => {
    let stateArray = state.interviews;
    return [...stateArray, interview]
  }),
  on(deleteInterviewSuccess, (state: any, { interviewId }) => {
    return state?.interviews?.filter((interview:any) => interview.id !== interviewId);
  }),
  on(updateInterviewSuccess, (state: any, { interview }) => {
    const interviews = state?.interviews?.map((m: any) => {
      if (m.id === interview.id) {
        return interview;
      }
      return m;
    });
    return interviews;
  })
);

export function interviewReducer(state: any, action: any) {
  return _interviewReducer(state, action);
}