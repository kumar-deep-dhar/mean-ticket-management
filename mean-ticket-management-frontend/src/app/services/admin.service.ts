// admin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/teams';

  constructor(private http: HttpClient) {}

  createTeam(teamData: any): Observable<any> {
    return this.http.post(`http://localhost:3000/api/teams/create`, teamData);
  }

  getAllTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  getTeamById(teamId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-team/${teamId}`);
  }

  updateTeam(teamId: string, updatedData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${teamId}`, updatedData);
  }

  deleteTeam(teamId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${teamId}`);
  }

  shuffleMembers(): Observable<any> {
    return this.http.patch(`${this.apiUrl}/shuffle-members`, {});
  }
}
