import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  public constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.logout().subscribe();
  }
}
