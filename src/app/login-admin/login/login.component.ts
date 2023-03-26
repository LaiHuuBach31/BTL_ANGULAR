import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(private router: Router, private accService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.checkAccLogin(this.formData.value)
  }

  checkAccLogin(data:any):void{  // truyền vào 1 data có email và password
    this.accService.getAllAcc().subscribe((datas)=>{  //gọi hết acc 
      var check = datas.find((item:any)=> item.email == data.email && item.password == data.password && item.role === 'admin')
      // console.log(check);
      
      if(check){
        localStorage.setItem('adminLogin',JSON.stringify(check))
        this.router.navigate(['/admin/'])
        this.simpleAlert();
      }
      else{
        // alert('sai thông tin mật khẩu')
        this.logout();
      }
    })
  }

  simpleAlert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  logout(){
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  get f():any{
    return this.formData.controls;
  }
}
