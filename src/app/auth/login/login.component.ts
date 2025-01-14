//TaskFlow-Frontend\src\app\core\auth.guard.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router : Router
    ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          console.log('Logged in successfully!');
          this.router.navigate(['/tasks']); 
        },
        (error) => console.error('Login error', error)
      );
    }  
  }

  logout() {
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']);
  }
  
}
