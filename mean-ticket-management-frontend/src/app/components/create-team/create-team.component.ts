import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {
  teamForm: FormGroup=this.fb.group({
    name: ['', Validators.required],
    supervisor: ['', Validators.required],
   // engineers: [[], Validators.required],
  });;
  supervisors: any[] = []; // Replace any with your supervisor type
  //engineers: any[] = []; // Replace any with your engineer type

  constructor(private fb: FormBuilder, private teamService: AdminService) {}

  ngOnInit() {
    // this.teamForm = this.fb.group({
    //   teamName: ['', Validators.required],
    //   supervisor: ['', Validators.required],
    //   engineers: [[], Validators.required],
    // });
  }

  onSubmit() {
    if (this.teamForm.valid) {
      this.teamService.createTeam(this.teamForm.value)
        .subscribe(response => {
          console.log('Team created successfully:', response);
        }, error => {
          console.error('Error creating team:', error);
        });
    }
  }
}
