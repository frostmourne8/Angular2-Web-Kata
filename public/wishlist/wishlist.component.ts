import { Component } from '@angular/core';

import { Character } from 'character/model';
import { Wishlist, WishlistItem } from 'wishlist/model';
import { WishlistService } from 'wishlist/wishlist.service';

@Component({
    selector: 'wishlist',
    templateUrl: 'wishlist.html',
    styleUrls: ['wishlist.css', 'wishlist-animation.css']
})
export class WishlistComponent {

    public wishlist: Wishlist;
    public hoveredItem: WishlistItem;
    public selectedItem: WishlistItem;

    constructor(service: WishlistService, character: Character) {
        this.wishlist = service.wishlistForCharacter(character);
    }

    public selected(item: WishlistItem) {
        this.selectedItem = item;
    }

    public hovered(item: WishlistItem) {
        this.hoveredItem = item;
        this.hoveredItem.highlighted = true;
    }

    public unhovered(item: WishlistItem) {
        this.hoveredItem = undefined;

        if (item !== this.selectedItem) {
            item.highlighted = false;
        }
    }
}