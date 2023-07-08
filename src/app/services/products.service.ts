import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products:any[]=[{
name:'Avikalp',
num:'2',
date:'25th January 2022'
},
{
  name:'Mike',
  num:'3',
  date:'31th December 2022'
}
]; 

constructor(){} 

myfun(name:any,num:any,date:any)
{
this.products.push({
name:name,
num:num,
date:date
});
}

getProducts()
{
return this.products;
}


}
