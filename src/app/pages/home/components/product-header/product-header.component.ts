import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit{
@Output() columnsCountChange = new EventEmitter<number>();
@Output() itemsCountChnage = new EventEmitter<number>();
@Output() sortChange = new EventEmitter<string>();

sort = 'desc';
itemsShowCount = 12;
constructor(){}
ngOnInit(): void {
  
}

  onShortUpdate(newShort : string): void{
    this.sort = newShort;
    this.sortChange.emit(newShort);
  }
  onItemUpdate(count:number):void{
    this.itemsShowCount =count;
    this.itemsCountChnage.emit(count);
  }
  onColumnsUpdate(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }

}

