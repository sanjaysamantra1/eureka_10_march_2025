import { Component } from '@angular/core';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
 import { CartService } from '../../services/cart.service';
 import { Subscription } from 'rxjs';
 
 @Component({
   selector: 'app-header',
   imports: [
     FontAwesomeModule
   ],
   templateUrl: './header.component.html',
   styleUrl: './header.component.css'
 })
 export class HeaderComponent {
   faCartShopping = faCartShopping;
   cartItems: any[] = [];
   totalPrice: number = 0;
   subscriptionsArr: Subscription[] = [];
   constructor(private CartService: CartService) {
     let cartItemSubscription = this.CartService.cartItem$.subscribe(cartItems => {
       this.cartItems = cartItems;
     });
     this.subscriptionsArr.push(cartItemSubscription);
 
     let totalPriceSubscription = this.CartService.totalPrice$.subscribe(totalPrice => {
       this.totalPrice = totalPrice;
     });
     this.subscriptionsArr.push(totalPriceSubscription);
   }
 
   ngOnDestroy() {
     this.subscriptionsArr.forEach(subscription => {
       subscription.unsubscribe();
     })
   }
 }