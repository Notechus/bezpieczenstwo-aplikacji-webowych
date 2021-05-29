import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public constructor(private authService: AuthService) {}

  public ngOnInit() {
    this.authService.verifyLogin();
  }
}
