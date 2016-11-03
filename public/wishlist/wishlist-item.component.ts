import { Component } from '@angular/core';
import { WishlistItem } from 'wishlist/model';

@Component({
  selector: 'wishlist-item',
  inputs: ['item'],
  templateUrl: 'wishlist-item.html'
})
export class WishlistItemComponent {

    public item: WishlistItem;
    public selected: boolean;
    public highlighted: boolean;

    constuctor() {
        this.selected = false;
        this.highlighted = false;
    }
 }