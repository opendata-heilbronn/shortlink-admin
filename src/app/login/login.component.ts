import {Component, OnInit} from '@angular/core';
import {ShortlinkService} from "../shortlink.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = null;
  username: string;
  password: string;

  constructor(private shortlinkService: ShortlinkService, private router: Router) {
  }

  async onSubmit() {
    console.log('Login');
    const success = await this.shortlinkService.setLogin(this.username, this.password);
    if (success)
      this.router.navigateByUrl('/');
    else
      this.error = 'Login failed';
  }

}
