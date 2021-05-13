import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  list = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      detail: 'Description for product item number 1',
      img: 'https://via.placeholder.com/200x150',
      price: 10,
      quantity: 3,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      detail: 'Description for product item number 2',
      img: 'https://via.placeholder.com/200x150',
      price: 25,
      quantity: 2,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 2',
      detail: 'Description for product item number 2',
      img: 'https://via.placeholder.com/200x150',
      price: 30,
      quantity: 7,
    },
  ];

  number = this.list.length;

  removeProduct(id: string) {
    const index = this.list.findIndex((product:any) => product.id = id);
    this.list.splice(index, 1);
    this.number = this.list.length;
  }
}
