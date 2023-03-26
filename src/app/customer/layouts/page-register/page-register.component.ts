import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccountService } from 'src/app/service/account.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {

  formData = new FormGroup ({
      firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      lastName   : new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName   : new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private accService:AccountService, private router: Router, private proService: ProductService) { }

  length:any;

  ngOnInit(): void {
    this.proService.lengthCart.subscribe((data)=>{
      this.length = data;
      console.log(this.length);
      
    })
  }

  onSubmit(){
    this.accService.register(this.formData.value).subscribe((data)=>{
         if(data){
            this.router.navigate(['/form']);
            this.simpleAlert();
         }
    })
    // console.log(this.formData.value);
    
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

    console.log($event.target.scrollingElement.scrollTop);
  }

  show = true;
  onClick(){
    if(this.show){
      document.getElementById('show_search')?.classList.remove('form_control');
      document.getElementById('delete')?.classList.remove('form_control');
      this.show = false;
      // console.log(this.show);
      
    } else{
      // document.getElementById('show_search')?.classList.add('form_control');
      // this.show = true;
      // console.log(this.show);
    }
  }

  deleteSearch(){
    if(this.show){
      
    } else{
      document.getElementById('show_search')?.classList.add('form_control');
      document.getElementById('delete')?.classList.add('form_control');
      this.show = true;
      // console.log(this.show);
    }
  }
 

  showPass() {
    let show = document.getElementById('pass1') as HTMLInputElement;
    if(show.type == 'text'){
      show.setAttribute('type', 'password')
      document.getElementById('hide_')?.setAttribute('class', 'fa-solid fa-eye icon_pass')
    } else{
      show.setAttribute('type', 'text')
      document.getElementById('hide_')?.setAttribute('class', 'fa-solid fa-eye-slash icon_pass')
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


  get f():any{
    return this.formData.controls;
  }

}
