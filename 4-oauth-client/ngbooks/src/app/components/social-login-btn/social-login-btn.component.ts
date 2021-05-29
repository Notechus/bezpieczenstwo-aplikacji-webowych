import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-login-btn',
  templateUrl: './social-login-btn.component.html',
  styleUrls: ['./social-login-btn.component.scss']
})
export class SocialLoginBtnComponent implements OnInit {
  @Input() public icon: string;
  @Input() public text: string;
  @Input() public url: string;

  public constructor() {}

  public ngOnInit(): void {}
}
