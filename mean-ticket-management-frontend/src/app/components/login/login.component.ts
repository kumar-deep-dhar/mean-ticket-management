import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.authService.login(user).subscribe(
        (response) => {
          console.log('Login successful:', response);

          // Redirect based on the role
          const role = response.role;
          if (role === 'admin') {
            this.router.navigate(['admin-dashboard']);
          } else if (role === 'callCenter') {
            this.router.navigate(['call-center-dashboard']);
          } else if (role === 'supervisor') {
            this.router.navigate(['/supervisor-dashboard']);
          } else {
          }
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
