import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {
  @Input() public visible: boolean = false;
  @Input() public style: string;

  public constructor() {}

  public ngOnInit(): void {}
}
