import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input ({required : true}) user: User = {}  as User;

  
}
