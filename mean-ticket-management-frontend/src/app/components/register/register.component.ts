import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', Validators.required],
  });
  constructor(private authService:AuthService,private fb:FormBuilder){ }
  onSubmit(): void {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.authService.register(user).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Handle success (e.g., redirect to login)
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
  ngOnInit(): void {}
}
