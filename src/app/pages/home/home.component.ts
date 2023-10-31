import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT : { [id:number]: number} = {1:400, 3:335,4:350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
cols =3;
rowHeight = ROWS_HEIGHT[this.cols]
category : string |undefined;
products:Array<Product>| undefined;
sort ='desc';
count= '12';
productsSubcription: Subscription | undefined;

constructor(private cartService: CartService, private storeService : StoreService){

}
ngOnInit(): void {
  this.getProducts();
}
  getProducts():void{
    this.storeService.getallProducts(this.count,this.sort,this.category).subscribe((_product)=>{
      this.products=_product;
    })
  }

  onColumnsUpdate(colsNum: number) :void{
  this.cols = colsNum;
  this.rowHeight = ROWS_HEIGHT[this.cols]

  }
  onShowCategory(newCategory : string): void{
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product:Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price : product.price,
      quantity: 1,
      id:product.id
    });
  }
  ngOnDestroy(): void {
    if(this.productsSubcription){
      this.productsSubcription.unsubscribe();
    }
  }
  onItemsCountChange(newCount:number):void{
    this.count = newCount.toString();
    this.getProducts();
  }
  onShortChange(newShort:string):void{
    this.sort= newShort;
    this.getProducts();
  }
}
