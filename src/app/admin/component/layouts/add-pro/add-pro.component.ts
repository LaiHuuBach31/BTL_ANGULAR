import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

cateforshop:any;
cateplayer:any;
image1: string = '';
image2: string = '';

formData = new FormGroup ({
  title: new FormControl('', [Validators.required]),
  price: new FormControl('', [Validators.required]),
  image1: new FormControl(''),
  image2: new FormControl(''),
  forshop_id: new FormControl('', [Validators.required]),
  player_id: new FormControl('', [Validators.required]),
})

constructor(private cate:ProductService, private router:Router) { 
    this.cate.getAllforshop().subscribe((data)=>{
      this.cateforshop = data;
    })

    this.cate.getAllplayer().subscribe((data)=>{
      this.cateplayer = data;
    })
    this.f.image1.errors = false
    this.f.image2.errors = false
}

ngOnInit(): void {
    
}

changeImage1(event:any){
  const reader = new FileReader();  // định nghĩa reader để đọc
  const file = event.target.files;
  // console.log(event);
  // console.log(file);
  
  reader.readAsDataURL(file[0]);
  reader.onload = ()=>{
    this.image1 = reader.result as string;
    // console.log(reader.result);
    
  }
}

changeImage2(event:any){
  const reader = new FileReader();  // định nghĩa reader để đọc
  const file = event.target.files;
  reader.readAsDataURL(file[0]);
  reader.onload = ()=>{
    this.image2 = reader.result as string;
  }
}

onSubmit(){
  this.formData.patchValue({   // đẩy dữ liệu ảnh vào trong formData
    image1: this.image1,   // gán giá trị của img trong formData bằng giá trị img bên ngoài form
    image2: this.image2
  });
  console.log(this.formData.value);

  if(this.image1 === ''){
    this.f.image1.errors = true;
  }
  if(this.image2 === ''){
    this.f.image2.errors = true;
  }

  if(this.formData.valid){
    this.cate.addProduct(this.formData.value).subscribe((data)=>{
      if(data){
        this.addSuccessful();
        this.router.navigate(['/admin/list-pro'])
      }
    })
  }
  
}

addSuccessful(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}
get f():any{
  return this.formData.controls;
}

}
