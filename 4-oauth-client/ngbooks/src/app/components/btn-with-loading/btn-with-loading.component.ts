import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'btn-with-loading',
  templateUrl: './btn-with-loading.component.html',
  styleUrls: ['./btn-with-loading.component.scss']
})
export class BtnWithLoadingComponent {
  @Input() public color: ThemePalette;
  @Input() public label: string;
  @Input() public loading: boolean;

  public constructor() {}
}
