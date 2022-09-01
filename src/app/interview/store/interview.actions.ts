import { createAction, props } from '@ngrx/store';
import { Interview } from '../model/interview.model';

export const INTERVIEW_STORE_NAME = 'interview';

export const InterviewAction = {
  GET_INTERVIEWS: '[Interview] Get interviews',
  GET_INTERVIEWS_SUCCESS: '[Interview] Get interviews success',
  ADD_INTERVIEWS: '[Interview] Add Interview',
  ADD_INTERVIEWS_SUCCESS: '[Interview] Add Interview success',
  DELETE_INTERVIEWS: '[Interview] Delete Interview',
  DELETE_INTERVIEWS_SUCCESS: '[Interview] Delete Interview success',
  UPDATE_INTERVIEWS: '[Interview] Update Interview',
  UPDATE_INTERVIEWS_SUCCESS: '[Interview] Update Interview success',
}

export const getInterviews = createAction(InterviewAction.GET_INTERVIEWS);
export const getInterviewsSuccess = createAction(
  InterviewAction.GET_INTERVIEWS_SUCCESS,
  props<{ interviews: any }>()
);
export const addInterviews = createAction(
  InterviewAction.ADD_INTERVIEWS,
  (interview: Interview) => ({ interview })
);
export const addInterviewsSuccess = createAction(
  InterviewAction.ADD_INTERVIEWS_SUCCESS,
  (interview: Interview) => ({ interview })
);

export const deleteInterview = createAction(
  InterviewAction.DELETE_INTERVIEWS,
  (interviewId: string) => ({ interviewId })
);

export const deleteInterviewSuccess = createAction(
  InterviewAction.DELETE_INTERVIEWS_SUCCESS,
  (interviewId: string) => ({ interviewId })
);

export const updateInterview = createAction(
  InterviewAction.UPDATE_INTERVIEWS,
  (interview: Interview) => ({ interview })
);

export const updateInterviewSuccess = createAction(
  InterviewAction.UPDATE_INTERVIEWS_SUCCESS,
  (interview: Interview) => ({ interview })
);
