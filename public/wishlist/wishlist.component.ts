import { Component } from '@angular/core';

import { Character } from 'character/model';
import { Wishlist } from 'wishlist/model';
import { WishlistService } from 'wishlist/wishlist.service'; 

@Component({
  selector: 'wishlist',
  templateUrl: 'wishlist.html',
  styleUrls: ['wishlist/wishlist.css', 'wishlist/wishlist-animation.css']
})
export class WishlistComponent {

    public wishlist: Wishlist;

    constructor(service: WishlistService, character: Character) {
        this.wishlist = service.wishlistForCharacter(character);
    }
 }