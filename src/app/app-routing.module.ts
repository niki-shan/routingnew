import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MultiproductsComponent } from './components/multiproducts/multiproducts.component';
import { SingleprodComponent } from './components/singleprod/singleprod.component';
import { SingleuserComponent } from './components/singleuser/singleuser.component';
import { MultiusersComponent } from './components/multiusers/multiusers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
    {
      path : "navbar",
      component : HomeComponent
    },
    {
      path : "home",
      component : HomeComponent
    },
    {
      path : "multiproducts",
      component : MultiproductsComponent,
      children : [
        {
          path : "add",
          component : FormComponent
        },
        {
          path : ":productId",
          component : SingleprodComponent
        },
        {
          path : ":productId/editform",
          component : FormComponent
        },
        {
          path : ":productId/edit",
          component : FormComponent
        },
      ]
     
    },
   
     
    // {
    //   path : "singleprod",
    //   component : SingleprodComponent
    // },
    { 
      path :"singleuser",
      component : SingleuserComponent
    },
    {
      path : "multiuser",
      component : MultiusersComponent
    },
    // {
    //   path : 'page-not-found',
    //   component : PageNotFoundComponent
    // },
    // {
    //   path : '**',
    //   component : PageNotFoundComponent
    // }


 ];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
