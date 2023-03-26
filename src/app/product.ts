import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
    id?: number;
    title?: string;
    price?: number;
    image1?: string;
    image2?: string;
    forshop_id?:number;
    player_id?:number
}
