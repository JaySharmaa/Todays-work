import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public cartItemlist: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  // service for get & set products.
  getProducts() {
    return this.productList.asObservable();
  }
  getProductDetails() {
    // console.log(this.cartItemlist)
    return this.cartItemlist
  }
  setProducts(product: any) {
    this.cartItemlist.push(product);
    this.productList.next(product);
  }
  // service for add to cart
  addTocart(product: any) {
    let flag = 1;
    this.cartItemlist.forEach((prd: any) => {
      if (product.id == prd.id) {
        prd.quantity++;
        prd.total = prd.price * prd.quantity;
        flag = 0;
      }
    });
    if (flag == 1) {
      this.cartItemlist.push(product);
    }

    this.productList.next(this.cartItemlist);
    this.getTotalprice();
  }
  // service for calculating total price
  getTotalprice() {
    let grandTotal = 0;
    this.cartItemlist.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // service for deleting one item from cart
  removeCartitem(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemlist.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlist);
  }
  // service for removing all items from cart
  removeAllCart() {
    this.cartItemlist = []
    this.productList.next(this.cartItemlist);
  }
}