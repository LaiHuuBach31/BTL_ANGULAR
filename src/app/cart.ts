import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Cart {
    id?: number;
    id_product?: number;
    forshop_id?: number;
    title?: any;
    image1?: any;
    price?: any;
    quantity?: number
}


