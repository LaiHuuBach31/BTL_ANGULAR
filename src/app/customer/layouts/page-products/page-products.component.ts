import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  listpage:any =[]
  keySearch: any;

  shopfor:any;
  featured:any;
  player:any;
  departments:any;

  product:any;

  id:any;
  products:any;
  length:any;
  numberPage:number = 1

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private proService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.proService.getAllforshop().subscribe((data)=>{
      this.shopfor = data;
    })
    this.proService.getAllfeatured().subscribe((data)=>{
      this.featured = data;
    })
    this.proService.getAllplayer().subscribe((data)=>{
      this.player = data;
    })
    this.proService.getAlldepartments().subscribe((data)=>{
      this.departments = data;
    })

    this.proService.lengthCart.subscribe((data)=>{
      this.length = data;
      console.log(this.length);
      
    })
    this.proService.getAllproduct().subscribe(data=>{
        let numberPro:number= (data.length/9)
        for (let index = 0; index <numberPro; index++) {
            this.listpage.push(index+1)
        }
    })
    this.getPage()
    // xem chi tiết sản phẩm
    

  }
  getPage(){
    this.proService.getAllproductPage(this.numberPage).subscribe((data)=>{
      this.product = data;
    })
  }
  changePage(number: any) {
    window.scroll({
      top: 300,
      left: 0,
      behavior: 'smooth'
    })
    // this.checkPage = number
    this.numberPage = number
    this.getPage()
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

  // tất cả sản phẩm 
  AllProduct(){
    // this.proService.getAllproduct().subscribe((data)=>{
    //   this.product = data;
    // })
    this.numberPage = 1
    this.getPage()
  }
  // lọc sản phẩm theo giới tính
  filter_gender(id:number){
    this.proService.showPro(id).subscribe((data)=>{
      this.product = data;
    })
  }

  // lọc sản phẩm theo giới tính
  filter_player(id:number){
    this.proService.showPlayer(id).subscribe((data)=>{
      this.product = data;
    })
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

  
  option = true;
  Option(check:string){
    if(check == 'shopfor'){
      if(this.option){
        document.getElementById('show')?.classList.remove('hiden'),
        document.getElementById('show_icon_down')?.classList.add('rotate'),
        this.option = false;
      } else{
        document.getElementById('show')?.classList.add('hiden'),
        document.getElementById('show_icon_down')?.classList.remove('rotate'),
        this.option = true;
      }
    } else if(check == 'featured'){
      if(this.option){
        document.getElementById('show1')?.classList.remove('hiden'),
        document.getElementById('show_icon_down1')?.classList.add('rotate'),
        this.option = false;
      } else{
        document.getElementById('show1')?.classList.add('hiden'),
        document.getElementById('show_icon_down1')?.classList.remove('rotate'),
        this.option = true;
      }
    } else if(check == 'player') {
      if(this.option){
        document.getElementById('show2')?.classList.remove('hiden'),
        document.getElementById('show_icon_down2')?.classList.add('rotate'),
        this.option = false;
      } else{
        document.getElementById('show2')?.classList.add('hiden'),
        document.getElementById('show_icon_down2')?.classList.remove('rotate'),
        this.option = true;
      }
    } else{
      if(this.option){
        document.getElementById('show3')?.classList.remove('hiden'),
        document.getElementById('show_icon_down3')?.classList.add('rotate'),
        this.option = false;
      } else{
        document.getElementById('show3')?.classList.add('hiden'),
        document.getElementById('show_icon_down3')?.classList.remove('rotate'),
        this.option = true;
      }
    }
    
  }
  
  
}
