import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  formData =  new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(private accService: AccountService, private router: Router) { }

  error:any;

  ngOnInit(): void {
      
  }

  onSubmit(): void{
      this.accService.login(this.formData.value).subscribe((data)=>{
        if(data[0]){
          // đăng nhập đúng > lưu vào lc
          localStorage.setItem('acc', JSON.stringify(data[0]));
          this.router.navigate(['/']);
          this.simpleAlert()
        } else{
            this.error = "WRONG INFORMATION"
        }
        // console.log(data);
        
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
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    if (($event.target.scrollingElement.scrollTop) > 130) {
      document.getElementById('menu_scrol')?.classList.add('scrol')
    } else {
      document.getElementById('menu_scrol')?.classList.remove('scrol')
    }

    // console.log($event.target.scrollingElement.scrollTop);
  }


  get f():any{
    return this.formData.controls;
  }
  showPass(){
    let showPass = document.getElementById('pass1') as HTMLInputElement
    if(showPass.type == 'text'){
      showPass.setAttribute('type','password') 
      document.getElementById('hide_')?.setAttribute('class', 'fa-solid fa-eye icon-eye')
    }else {
      showPass.setAttribute('type','text');
      document.getElementById('hide_')?.setAttribute('class', 'fa-solid fa-eye-slash icon-eye')
    }
  }
  onChange(){
    let show_icon = document.getElementById('pass1') as HTMLInputElement;
    if(show_icon.value === ''){
      document.getElementById('hide_')?.classList.add('aaa')
      // alert('haha')
    } else{
      document.getElementById('hide_')?.classList.remove('aaa')
    }
  }
}
