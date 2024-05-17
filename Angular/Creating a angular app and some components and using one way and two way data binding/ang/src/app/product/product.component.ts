import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput:string="Electronics";
  products:product[]=[{productId:101,productName:"Laptop",cost:100000,category:"Gaming"},
  {productId:102,productName:"Pendrive",cost:400,category:"Electronics"},
  {productId:103,productName:"MobilePhone",cost:50000,category:"Electronics"},
  {productId:104,productName:"Coke",cost:80,category:"Beverages"},
  {productId:105,productName:"Pen",cost:50,category:"Stationary"},
  {productId:106,productName:"Bag",cost:1000,category:"Stationary"}

  ]

}
