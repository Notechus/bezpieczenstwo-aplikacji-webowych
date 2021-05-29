import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profileForm: FormGroup;
  public passwordForm: FormGroup;

  public constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

    this.passwordForm = this.formBuilder.group({
      oldPassword: new FormControl(''),
      newPassword: new FormControl(''),
      newPasswordRepeat: new FormControl('')
    });
  }

  public ngOnInit(): void {}

  public updateProfile(): void {
    console.log('form is', this.profileForm.getRawValue());
  }

  public updatePassword(): void {
    console.log('update password', this.passwordForm.getRawValue());
  }
}
