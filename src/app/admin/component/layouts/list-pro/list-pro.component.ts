import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProService } from 'src/app/service/admin-pro.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {

  list:any;

  constructor(private listProduct: AdminProService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProduct.getAll().subscribe((data)=>{
      this.list = data;
    })
  }

  DeletePro(id:number){
    if(confirm('bạn có chắc muốn xóa không')){
      this.listProduct.delete(id).subscribe((data)=>{
        this.listProduct.getAll().subscribe((data)=>{
          this.list = data;
        })
      })
    }
  }
}
