import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ipass } from 'src/app/models/data';
import { ProductsService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

 @Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
 })
 export class FormComponent implements OnInit {
  productForm! : FormGroup;
  isEditable : boolean = false
  editId ! : string;
  editObj ! : Ipass
  
  
  constructor(private _productservice : ProductsService,
              private _uuid : UuidService,
              private _router : Router,
              private _route : ActivatedRoute) {

   }

  ngOnInit(): void {
    this.createForm()
    this.pathForm()
    this.onUpdate()
  }

   createForm(){
     this.productForm = new FormGroup ({
         pname : new FormControl,
         pstatus : new FormControl
     })
         
}

onformclick(){

   let obj : Ipass= {
    ...this.productForm.value,
    pid : this._uuid.uuidv4()
       }             
     console.log(obj);
     this._productservice.getaddData(obj)
      this.productForm.reset()
      this._router.navigate(['multiproducts'])
    
}

pathForm(){
   this._route.params.
   subscribe((param : Params)=>{
      this.editId = param['productId']
      console.log(this.editId);
      
      if(this.editId){
        this.isEditable = true;
        this.editObj = this._productservice.getSingleobj(this.editId)
         this.productForm.patchValue(this.editObj)
         console.log(this.editObj);
      
         
      }

  

   })  
}
onUpdate(){
   let obj ={
      ...this.productForm.value, pid : this.editId
   }
   this._productservice.updatedObj(obj)
      this.productForm.reset()
      this._router.navigate(['multiproducts'])
      
}

}


