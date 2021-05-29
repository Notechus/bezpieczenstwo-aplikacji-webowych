import { Component, OnInit } from '@angular/core';
import { booksRoutes, NavbarLinkInterface, userRoutes } from '@app/config/route.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public booksLinks: NavbarLinkInterface[] = booksRoutes;
  public userLinks: NavbarLinkInterface[] = userRoutes;

  public isCollapsed = true;
  public activeId: string;
  public constructor() {}

  public ngOnInit(): void {}
}
