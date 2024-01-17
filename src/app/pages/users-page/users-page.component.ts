import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-page',
  standalone: true,
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  imports: [] 
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
