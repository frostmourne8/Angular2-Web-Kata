import { Component } from '@angular/core';

import { WishlistItem } from 'wishlist/model';
import { Item } from 'item/model';

import { ItemDataService } from 'item/item-data.service';

@Component({
  selector: 'wishlist-item',
  inputs: ['item'],
  templateUrl: 'wishlist-item.html'
})
export class WishlistItemComponent {

    public item: WishlistItem;

    constructor(private itemDataService: ItemDataService) { }

    public iconImage(item: Item): URL {
        return this.itemDataService.itemIcon(item);
    }
 }