import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'user',component:NavbarComponent,
children:[
{path:'home',component:HomeComponent},
{path:'addpro',component:AddproductComponent},
{path:'viewpro',component:ViewproductComponent},
{path:'about',component:AboutComponent}
]
},
{path:'login',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
