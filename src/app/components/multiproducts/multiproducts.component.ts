import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipass } from 'src/app/models/data';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-multiproducts',
  templateUrl: './multiproducts.component.html',
  styleUrls: ['./multiproducts.component.scss']
})
export class MultiproductsComponent implements OnInit {
   prodobj : Array<Ipass> = []
  prod ! : Ipass

  constructor(private _ProductsService : ProductsService,
    private _route : ActivatedRoute) { }

  ngOnInit(): void {
      this.prodobj = this. _ProductsService.getAlldata()
     
  }
  

}
