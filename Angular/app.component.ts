import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shopName = 'IT Shop';

  onProductAdded(productName: string): void {
    alert(`Товар додано до кошика: ${productName}`);
  }
}
