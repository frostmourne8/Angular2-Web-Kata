import { Component, Input } from '@angular/core';

import { WishlistItem } from 'wishlist/model';
import { Item } from 'item/model';

import { ItemDataService } from 'item/item-data.service';

@Component({
    selector: 'wishlist-item',
    templateUrl: 'wishlist-item.html'
})
export class WishlistItemComponent {

    @Input() item: WishlistItem;

    constructor(private itemDataService: ItemDataService) { }

    public iconImage(item: WishlistItem): string {
        if(!item) { return ''; }

        if(item.item) {
            return this.itemDataService.itemIcon(item.item); 
        } else {
            return this.itemDataService.itemTypeIcon(item.slot.type);
        }        
    }    
}