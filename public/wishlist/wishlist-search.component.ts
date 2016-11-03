import { Component } from '@angular/core';

import { WishlistItem } from 'wishlist/model';

@Component({
  selector: 'wishlist-search',
  inputs: ['item'],
  templateUrl: 'wishlist-search.html'
})
export class WishlistSearchComponent {

    public item: WishlistItem;
    public visible: boolean;
 }