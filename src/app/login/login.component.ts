import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User = {username: null};

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    if (localStorage.getItem('wbma_token')) {
      // TODO: use mediaservice to validate token if found and set correct loggedIn value
    }
  }

  /**
   * Login form handler
   */
  doLogin(): void {
    this.mediaService.login(this.user).subscribe(data => {
      console.log(data);
      this.mediaService.loggedIn = true;
      localStorage.setItem('wbma_token', data.token);
    }, error => {
      console.log(error);
    });
  }

  /**
   * Logout button handler
   */
  logout(): void {
    this.mediaService.loggedIn = false;
    localStorage.removeItem('wbma_token');
  }

}
