import { Component, Input,EventEmitter, OnInit ,Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit{
@Input () fullWhidthMode = false;
product : Product | undefined = {
  id: 1,
  title: 'snickers',
  price : 1550,
  category: 'shoes',
  description: 'Descriptiion',
  image: 'https://via.placeholder.com/150',
};
@Output() addToCart = new EventEmitter();
constructor(){

}
ngOnInit(): void {
  
}
onAdToCart(): void{
  this.addToCart.emit(this.product);
}
}
