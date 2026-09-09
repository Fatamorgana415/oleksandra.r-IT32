import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Output() productAdded = new EventEmitter<string>();
  
  products = [
    {
      name: 'Ноутбук ASUS',
      price: 25000,
      description: 'Ноутбук для навчання та роботи.'
    },
    {
      name: 'Смартфон Samsung',
      price: 15000,
      description: 'Сучасний смартфон з хорошою камерою.'
    },
    {
      name: 'Навушники Apple',
      price: 8500,
      description: 'Бездротові навушники з шумозаглушенням.'
    }
  ];
  
  onProductBuy(productName: string) {
    this.productAdded.emit(productName);
  }
}
