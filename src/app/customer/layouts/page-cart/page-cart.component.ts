import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  cart:any;
  total:number = 0;
  length:any;

  constructor(private cartService:CartService, private router:ActivatedRoute, private proService:ProductService ) { }

  ngOnInit(): void {
    this.getCart()
    this.proService.lengthCart.subscribe((data)=>{
      this.length = data;
      console.log(this.length);
      
    })
    
  }

  getCart(){
    this.cartService.getAllCart().subscribe((data)=>{
      this.cart = data;
      
      this.total = 0
      this.cart.forEach((element: any) => {
      this.total += (element.price * element.quantity)
      console.log(this.total);
    });
    })

    
  }

  mark(mark: any, id:number) {
    let quantily: any = document.getElementById(`quantily${id}`)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        let datas = this.cart.find((item:any)=>{
          return item.id == id;
        })
        datas.quantity = Number(quantily.value)
        this.cartService.putCart(datas).subscribe((data)=>{

        })
        this.getCart()
      }
    } else {
      quantily.value = Number(quantily.value) + 1
      let datas = this.cart.find((item:any)=>{
        return item.id == id;
      })
      datas.quantity = Number(quantily.value)
      this.cartService.putCart(datas).subscribe((data)=>{

      })
      this.getCart()
    }
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

  deleteCart(id:any){
    if (confirm('Bạn có chắc muốn xóa không?')) {
      this.cartService.deleteCart(id).subscribe((data)=>{

        this.cartService.getAllCart().subscribe((data)=>{
          this.cart = data;
        })
    })
    }
    
  }
  
}
