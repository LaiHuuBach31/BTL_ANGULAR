import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

cateforshop:any;
cateplayer:any;
image1: string = '';
image2: string = '';
_id:any;

formData = new FormGroup ({
  title: new FormControl('', [Validators.required]),
  price: new FormControl('', [Validators.required]),
  image1: new FormControl('', [Validators.required]),
  image2: new FormControl('', [Validators.required]),
  forshop_id: new FormControl('', [Validators.required]),
  player_id: new FormControl('', [Validators.required]),
})

constructor(private cate:ProductService, private router:Router, private routers:ActivatedRoute) { 
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
    this._id = this.routers.snapshot.params['id']
    this.cate.getDetail(this._id).subscribe((data)=>{
      this.formData.patchValue(data)

      this.image1 = this.formData.value.image1 // thêm data vào image1
      this.image2 = this.formData.value.image2
    })
    // console.log(this._id);
    
}

changeImage1(event:any){
  const reader = new FileReader();
  const file = event.target.files;
  reader.readAsDataURL(file[0]);
  reader.onload = ()=>{
    this.image1 = reader.result as string;
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
    this.cate.editProduct(this._id, this.formData.value).subscribe((data)=>{
      if(data){
        this.editSuccessful();
        this.router.navigate(['/admin/list-pro'])
      }
      console.log(data);
    })
  }

}
editSuccessful(){
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
