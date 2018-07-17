import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { Account } from '../AccountClass';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private objAccount: Account;

  constructor(private q: AccountServiceService ,private route: Router) { }

  ngOnInit() {
    this.GetAccount();
  }
  GetAccount() {
    this.q.GetAccData().subscribe(
      data => {
        // console.log(data);
        this.objAccount = data['msg'];
      }
    )
  }

}
