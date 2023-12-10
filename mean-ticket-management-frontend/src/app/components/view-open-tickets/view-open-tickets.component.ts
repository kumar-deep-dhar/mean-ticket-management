import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CallCenterService } from 'src/app/services/call-center.service';

@Component({
  selector: 'app-view-open-tickets',
  templateUrl: './view-open-tickets.component.html',
  styleUrls: ['./view-open-tickets.component.scss'],
})
export class ViewOpenTicketsComponent implements OnInit {
  @Output() ticketClosed = new EventEmitter<string>();

  openTickets: any[] = [];
  /**
   *
   */
  constructor(private callCenterService: CallCenterService) {}
  ngOnInit() {
    // this.callCenterService.getOpenTickets().subscribe(
    //   (response) => {
    //     console.log('Response from server:', response);
    //     this.openTickets = response;
    //   },
    //   (error) => {
    //     console.error('Error loading open tickets:', error);
    //   }
    // );
    this.loadActiveTickets();
  }

  // loadOpenTickets() {
  //   this.callCenterService.getOpenTickets().subscribe(
  //     (tickets) => {
  //       this.openTickets = tickets;
  //     },
  //     (error) => {
  //       console.error('Error loading open tickets:', error);
  //     }
  //   );
  // }

  loadActiveTickets(): void {
    this.callCenterService.getOpenTickets().subscribe((tickets) => {
      this.openTickets = tickets;
    });
  }

  closeTicket(ticketId: string):void {
    // this.callCenterService.closeTicket(ticketId).subscribe(
    //   (response) => {
    //     console.log('Ticket closed successfully:', response);
    //     this.ticketClosed.emit(ticketId);
    //   },
    //   (error) => {
    //     console.error('Error closing ticket:', error);
    //   }
    // );
    this.callCenterService.closeTicket(ticketId).subscribe(() => {
      // Remove the closed ticket from the activeTickets locally
      this.openTickets = this.openTickets.filter(
        (ticket) => ticket._id !== ticketId
      );
    });
  }
}
