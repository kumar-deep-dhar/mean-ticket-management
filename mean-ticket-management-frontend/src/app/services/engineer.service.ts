import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EngineerService {
  private apiURL = `http://localhost:3000/api/engineers`;
  constructor(private http: HttpClient) {}
  createEngineer(Data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/create`, Data);
  }
  getEngineerById(engineerId: string): Observable<any> {
    return this.http.get(`${this.apiURL}/get-engineer/${engineerId}`);
  }
  updateEngineerStatus(Data:any):Observable<any>{
    return this.http.patch(`${this.apiURL}/update-status`,Data);
  }
}

