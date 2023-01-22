import { Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  email: string;
  msg:Message;
  showMsg:boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  resetPassword() {
    this.authService.ResetPassword(this.email).then((res:Message)=>{
      this.msg=res;
      this.showMsg=true
    });
  }
}
