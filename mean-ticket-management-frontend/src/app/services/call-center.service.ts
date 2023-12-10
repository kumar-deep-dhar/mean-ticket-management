import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallCenterService {
  private apiUrl = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {}

  createTicket(ticketData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, ticketData);
  }

  searchTickets(searchTerm: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?searchTerm=${searchTerm}`);
  }

  updateTicketStatus(ticketId: string, newStatus: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-status`, {
      ticketId,
      newStatus,
    });
  }

  closeTicket(ticketId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/close`, { ticketId });
  }

  assignTicketToEngineer(
    ticketId: string,
    engineerId: string
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/assign-to-engineer`, {
      ticketId,
      engineerId,
    });
  }
getOpenTickets() {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.get<any[]>('http://localhost:3000/api/tickets/open-tickets', { headers });
}

}
