import { Component } from '@angular/core';
import { Item, ItemType } from 'app/model';

@Component({
  selector: 'wishlist-item',
  inputs: ['type'],
  templateUrl: 'wishlist-item.html'
})
export class WishlistItemComponent {

    public type: ItemType;
    public item: Item;
 }