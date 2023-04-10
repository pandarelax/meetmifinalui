import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingService } from '../services/meeting.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  meetingList$: Observable<any[]>;
  meetingList: any[];

  constructor(
    private meetingService: MeetingService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMeetingList();
  }

  getMeetingList() {
    this.meetingList$ = this.meetingService.getMeetingList();
    this.meetingList$.subscribe((data) => {
      this.meetingList = data;
      console.log('meetingList: ', this.meetingList);
    });
  }

  deleteMeeting(id: string) {
    this.meetingService.deleteMeeting(id).subscribe((data) => {
      this.getMeetingList();
    });
  }

  getMeetingById(id: string) {
    this.meetingService.getMeetingById(id).subscribe((data) => {
      console.log(data);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
