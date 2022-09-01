import { InterviewEffects } from './store/interview.effects';
import { InterviewService } from './services/interview.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { InterviewsListComponent } from './component/interview-list/interview-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { interviewReducer } from './store/interview.reducers';
import { ScheduleInterviewComponent } from './component/schedule-interview/schedule-interview.component';

@NgModule({
  declarations: [
    InterviewsListComponent,
    ScheduleInterviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('interview', interviewReducer),
    EffectsModule.forFeature([InterviewEffects])
  ],
  providers: [InterviewService],
  bootstrap: [],
  exports: [InterviewsListComponent, ScheduleInterviewComponent]
})
export class InterviewModule { }
