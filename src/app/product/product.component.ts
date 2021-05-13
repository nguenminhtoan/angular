import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() list:any;
  @Output() onRemoveProduct = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }


  removeProduct(productId: string): void{
    this.onRemoveProduct.emit(productId);
    // const index = this.list.findIndex((product:any) => product.id = productId);
    // this.list.splice(index, 1);
  }

  updateQuantity(element:any){
    element.value
  }


}
