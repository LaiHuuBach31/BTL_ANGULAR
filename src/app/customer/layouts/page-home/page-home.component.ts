import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogserviceService } from 'src/app/blogservice.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['1', '2'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  list: any;
  video: any;
  darwin: any;
  product: any;
  salah: any;
  user:any;
  constructor(private blogService: BlogserviceService, private route:Router) { }

  ngOnInit(): void {

    this.blogService.getAllBlog().subscribe((data) => {
      this.list = data;
    })

    this.blogService.getAllVideos().subscribe((data) => {
      this.video = data;
    })

    this.blogService.getAllDarwin().subscribe((data) => {
      this.darwin = data;
    })

    this.blogService.getAllProduct().subscribe((data) => {
      this.product = data;
    })

    this.blogService.getAllSalah().subscribe((data) => {
      this.salah = data;
    })

  this.checkUser();    
  
  
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event: any) {
    if (($event.target.scrollingElement.scrollTop) > 150) {
      document.getElementById('sticky')?.classList.add('sticky')
      // document.getElementById('logo')?.classList.add('search-sticky')
    } else {
      document.getElementById('sticky')?.classList.remove('sticky')
      // document.getElementById('logo')?.classList.remove('search-sticky')
    }

    // console.log($event.target.scrollingElement.scrollTop);
  }

  loginCustomer(){
    let data:any = localStorage.getItem('acc');
    if (!data) {
      this.route.navigate(['/form'])
    } else {
      
    }
  }

  checkUser() {
    let data:any = localStorage.getItem('acc');
    if (data) {
      this.user = JSON.parse(data);
      document.getElementById('ava')?.classList.add('users')
    } else {
      document.getElementById('logout1')?.classList.add('d-none')
      this.user = null;
      document.getElementById('ava')?.classList.remove('users')
    }
  }
  logOut(){
    localStorage.removeItem('acc')
    this.checkUser()
  }
}
