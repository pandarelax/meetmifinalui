import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getMeetingList(): Observable<any[]> {
    const token = this.authService.getToken();

    return this.http
      .get<any[]>(`https://localhost:7061/api/meetings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        map((data) => {
          console.log('data: ', data);
          return data;
        })
      );
  }

  getMeetingById(id: string): Observable<any> {
    return this.http.get<any>(`meetings/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  deleteMeeting(id: string): Observable<any> {
    return this.http.delete<any>(`meetings/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  createMeeting(meeting: any): Observable<any> {
    return this.http.post<any>(`meetings`, meeting).pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateMeeting(meeting: any, id: string): Observable<any> {
    return this.http.put<any>(`meetings/${id}`, meeting).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
