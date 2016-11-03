import { Item, ItemType, ItemSlot, ITEM_SLOTS } from 'item/model';
import { Character } from 'character/model';

export class Wishlist {

    public items: Array<WishlistItem>;

    constructor() {
        this.items = Object.values(ITEM_SLOTS).map((slot) => {
            return new WishlistItem(slot);
        });
    }
}

export class WishlistItem {

    public slot: ItemSlot;
    public item: Item;
    public collected: boolean;    
    public selected: boolean;
    public highlighted: boolean;

    constructor(slot: ItemSlot, item?: Item, collected?: boolean) {
        this.slot = slot;
        this.item = item;
        this.collected = collected || false;
        this.selected = false;
        this.highlighted = false;
    }
}