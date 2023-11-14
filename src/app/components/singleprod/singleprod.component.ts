import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ipass } from 'src/app/models/data';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-singleprod',
  templateUrl: './singleprod.component.html',
  styleUrls: ['./singleprod.component.scss']
})
export class SingleprodComponent implements OnInit {
     proId ! : string
     proObj ! : Ipass

  constructor(private _productService : ProductsService,
             private _route : ActivatedRoute) { }

  ngOnInit(): void {
         this.paramFun()
   
    
  }

  paramFun(){
    this._route.params.subscribe((params : Params)=>{
           this.proId = params['productId']
           this.proObj = this._productService.getSingleobj(this.proId)
           console.log(this.proObj);        
           
    })
  }


}


  

   
