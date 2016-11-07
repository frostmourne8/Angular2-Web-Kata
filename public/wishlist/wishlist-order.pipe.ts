import { Pipe, PipeTransform } from '@angular/core';

import { ITEM_SLOTS } from 'item/model';
import { WishlistItem } from 'wishlist/model';

const SLOT_ORDER = [
    ITEM_SLOTS.HELM,
    ITEM_SLOTS.NECK,
    ITEM_SLOTS.CHEST,
    ITEM_SLOTS.WEAPON,
    ITEM_SLOTS.GLOVES,
    ITEM_SLOTS.RING1,
    ITEM_SLOTS.BELT,
    ITEM_SLOTS.TRINKET1,
    ITEM_SLOTS.BOOTS,
    ITEM_SLOTS.TRINKET2,
    ITEM_SLOTS.PANTS,
    ITEM_SLOTS.RING2,
    ITEM_SLOTS.BRACERS,
    ITEM_SLOTS.OFF_HAND,
    ITEM_SLOTS.SHOULDERS,
    ITEM_SLOTS.CLOAK
];

@Pipe({ name: 'wishlistOrder' })
export class WishlistOrderPipe implements PipeTransform {

    public transform(items: Array<WishlistItem>): Array<WishlistItem> {
        return items.sort((a: WishlistItem, b: WishlistItem) => {
            return SLOT_ORDER.indexOf(a.slot) - SLOT_ORDER.indexOf(b.slot);
        });
    }
}