import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPro'
})
export class SearchProPipe implements PipeTransform {

  transform(list: any[], keyword?: string): any[] {
    if(keyword){
      keyword = keyword.toLowerCase(); // chuyển thành chữ thường
      return list.filter((data)=>{
        return data.title.toLowerCase().includes(keyword)
      });
    } else{
      return list;
    }
  }

}
