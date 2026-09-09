import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
  
  @Output() buy = new EventEmitter<string>();
  
  onBuyClick() {
    this.buy.emit(this.name);
  }
}
