import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart } from 'src/app/cart';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  detail:any = {};
  quantily:any
  dataCart = new Cart()
  index:any;
  length:any;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
  constructor(private router: ActivatedRoute, private detailPro: ProductService) { }

  ngOnInit(): void {
      let _id = this.router.snapshot.params['id'];
      // alert(_id)
      this.detailPro.getDetail(_id).subscribe((data)=>{
          this.detail = data;
      })
      // console.log(this.detail)

      this.detailPro.lengthCart.subscribe((data)=>{
        this.length = data;
        console.log(this.length);
        
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

  show = true;
  onClick(check:string){
    if(check == 'search_scroll'){
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
    } else if(check == 'search_scroll1'){
      if(this.show){
        document.getElementById('show_search1')?.classList.remove('form_control');
        document.getElementById('delete1')?.classList.remove('form_control');
        this.show = false;
        // console.log(this.show);
        
      } else{
        // document.getElementById('show_search')?.classList.add('form_control');
        // this.show = true;
        // console.log(this.show);
      }
    }
    
  }

  deleteSearch(check:string){
    if(check == 'delete_scroll') {
      if(this.show){
      
      } else{
        document.getElementById('show_search')?.classList.add('form_control');
        document.getElementById('delete')?.classList.add('form_control');
        this.show = true;
        // console.log(this.show);
      }
    } else if(check == 'delete_scroll1'){
      if(this.show){
      
      } else{
        document.getElementById('show_search1')?.classList.add('form_control');
        document.getElementById('delete1')?.classList.add('form_control');
        this.show = true;
        // console.log(this.show);
      }
    }
    
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
  

  mark(mark: any) {
    let quantily: any = document.getElementById('quantily')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }

  addCart(){
    let temp: any = document.getElementById('quantily')
    this.quantily = Number(temp.value)
    this.dataCart.id_product = this.detail.id
    this.dataCart.forshop_id = this.detail.forshop_id
    this.dataCart.title = this.detail.title
    this.dataCart.image1 = this.detail.image1
    this.dataCart.price = this.detail.price
    this.dataCart.quantity = this.quantily
    console.log(this.dataCart)
    this.detailPro.getCart().subscribe(data => {
      this.index = data.find((data: any) => {
        return data.id_product == this.dataCart.id_product
      })
      console.log(this.index);

      if (this.index) {
        this.index.quantity += this.quantily
        this.detailPro.putCart(this.index).subscribe(data => {
        })
        // alert("thành công")
        this.simpleAlert()
      } else {
        this.detailPro.postCart(this.dataCart).subscribe((data) => {
          if (data) {
            this.simpleAlert()
            // alert("thành công")
          }
        })
      }
    })
  }
}
