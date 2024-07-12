import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe();
  }
}
