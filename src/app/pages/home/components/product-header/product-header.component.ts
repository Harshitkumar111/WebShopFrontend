import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit{
@Output() columnsCountChange = new EventEmitter<number>();
sort = 'desc';
itemsShowCount = 12;
constructor(){}
ngOnInit(): void {
  
}

  onShortUpdate(newShort : string): void{
    this.sort = newShort
  }
  onItemUpdate(count:number):void{
    this.itemsShowCount =count;
  }
  onColumnsUpdate(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }

}

