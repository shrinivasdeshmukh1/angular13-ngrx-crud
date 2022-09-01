import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { InterviewModule } from './interview/interview.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InterviewEffects } from './interview/store/interview.effects';
import { interviewReducer } from './interview/store/interview.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterviewModule,
    HttpClientModule,
    EffectsModule.forRoot([InterviewEffects]),
    StoreModule.forRoot({ 'interview' : interviewReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
