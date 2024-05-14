import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {

  public usersService = inject(UsersService)

}
