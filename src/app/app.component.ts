import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

import { AsideService } from './services/aside.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openMenu: boolean = false;
  dashboardPages: boolean = false;
  constructor(
    private auth: AuthService,
    private asideService: AsideService,
    private router: Router,
  ) {
    // this.auth.checkAuth();
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.urlAfterRedirects.includes('dashboard')) {
          this.dashboardPages = true;
        } else {
          this.dashboardPages = false;
        }
      }
    });
  }
  checkMenu(event: boolean) {
    this.openMenu = event;
    this.asideService.setOpenAside(event);
  }
}
