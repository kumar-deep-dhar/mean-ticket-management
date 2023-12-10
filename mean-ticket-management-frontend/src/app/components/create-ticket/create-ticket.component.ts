import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallCenterService } from 'src/app/services/call-center.service';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
})
export class CreateTicketComponent implements OnInit {
  ticketForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: this.fb.group({
      address: ['', Validators.required],
      pin: ['', Validators.required],
    }),
    mobileNumber: ['', Validators.required],
    emailId: ['', Validators.required],
    flavor: ['', Validators.required],
  });
  constructor(
    private callCenterService: CallCenterService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.ticketForm.valid) {
      this.callCenterService.createTicket(this.ticketForm.value).subscribe(
        (response) => {
          console.log('ticket created successfully', response);
        },
        (error) => {
          console.log('Error Creating ticket', error);
        }
      );
    }
  }
}
