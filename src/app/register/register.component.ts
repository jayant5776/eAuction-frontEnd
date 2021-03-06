import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.userService.insertUser(this.user).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }



  onSubmit() {
    console.log(this.user);
    this.saveUser();
    this.router.navigate(['login']);
  }
}
