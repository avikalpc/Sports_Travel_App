import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
  products:any[]=[];

  constructor(private productService:ProductService){}

  ngOnInit()
  {
    this.products=this.productService.getProducts();
  }


}

