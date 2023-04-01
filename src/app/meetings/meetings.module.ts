import { SignupModule } from './../signup/signup.module';
import { LoginModule } from './../login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MeetingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MeetingsComponent,
      },
    ]),
  ],
})
export class MeetingsModule {}
