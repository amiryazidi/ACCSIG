import { Component, signal } from '@angular/core';
import { ProductM } from '../models/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  imports: [FormsModule,UpperCasePipe,CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  searchProduct=signal('')
  imageUrl = signal ('https://picsum.photos/id/1/300/200');
  imageAlt = signal('Photo du produit');

  //creation signal title
  title = signal ('Ma Boutique');

  // creation signal product de type ProductM
  products = signal<ProductM[]>([
  { id: 1, name: 'laptop hp probook', price: 2499.9, quantity: 5, likes: 12 },
  { id: 2, name: 'souris logitech mx', price: 159, quantity: 2, likes: 3 },
  { id: 3, name: 'clavier mécanique', price: 189.5, quantity: 0, likes: 8 },
  { id: 4, name: 'écran dell 24 pouces', price: 620, quantity: 14, likes: 21 }
  ]
  )

   stockValue(p: ProductM) {
    return p.price * p.quantity;
  }


  like(id: number) {
    this.products.update(list =>
      list.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }

  dislike(id: number) {
    this.products.update(list =>
      list.map(p => (p.id === id ? { ...p, likes: Math.max(0, p.likes - 1) } : p))
    );
  }

  buy(id: number) {
    this.products.update(list =>
      list.map(p =>
        p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  }
  searchByName(){
    return this.products().filter(p=>p.name.toLowerCase().includes(this.searchProduct().toLowerCase()))
  }
  
}
