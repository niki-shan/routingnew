import { Injectable, Input } from '@angular/core';
import { Ipass } from '../models/data';
import { mobArray } from '../const/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray :Array<Ipass>= mobArray;


  constructor() { }
  getAlldata(){
   return this.productArray
  }
  

  getaddData(obj:Ipass){
    return this.productArray.push(obj)
  }
  
  getSingleobj(id : string) : Ipass {
  return this.productArray.find(prod=>
    // console.log(prod);
      prod.pid === id   
    
    )!
  

  }   
    
  updatedObj(udtateobj:Ipass){
   let findObj=this.productArray.findIndex
   (id=> id.pid===udtateobj.pid );
    
   this.productArray[findObj].pname == udtateobj.pname;
   this.productArray[findObj].pstatus == udtateobj.pstatus; 
   
  }
    
  }
  

