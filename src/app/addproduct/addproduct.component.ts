import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
name:any=''
num:any=''
date:any=''

constructor(private productService:ProductService){}

ngOnInit(){



}

myfun(){
 
this.name=prompt('Enter Your Name'),
this.num=prompt('Number of people'),
this.date=prompt('Set a Date for Your Trip')
this.productService.myfun(this.name, this.num, this.date);  

}
}




