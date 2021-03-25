import {Component, OnDestroy, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

import { User} from "../shared/user";
import { DynamicscriptloaderService } from "../services/dynamicscriptloader.service";
import {AuthService} from "../services/auth.service";
import { UserService} from "../services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  users = [];



  constructor(
    private authenticationService: AuthService,
    private userService: UserService,
    private dynamicScriptLoader: DynamicscriptloaderService)
  {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadScripts();
    this.loadAllUsers();

  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
