import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService, private toastr : ToastrService) { }

  @Output()
  cancelRegister = new EventEmitter();

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      error: error => this.toastr.error(error.error),
      next: response => {
        console.log('Registration response:');
        console.log(response);
        this.cancel;
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
