import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() public email: string = '';
  @Input() public password: string = '';
  public isProcessing: boolean;

  public constructor(private authService: AuthService, private router: Router) {
  }

  public ngOnInit(): void {
    this.isProcessing = false;
  }

  public login(): void {
    if (!this.isProcessing) {
      this.isProcessing = true;
      this.authService.login(this.email.trim(), this.password.trim()).subscribe(user => {
        this.isProcessing = false;
        this.router.navigate(['home']);
      });

      this.email = '';
      this.password = '';
    }
  }

  public clear(field: string): void {
    this[field] = '';
  }

  public isEmpty(field: string): boolean {
    return field && field !== '';
  }
}
