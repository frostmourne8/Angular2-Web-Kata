import { TestBed } from '@angular/core/testing';

import { ComponentTestFixture } from 'tests/component/component.fixture';

import { WishlistItem } from 'wishlist/model';
import { ItemSlot, Item } from 'item/model';

import { WishlistModule } from 'wishlist/wishlist.module';
import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component'; 
import { ProfileImageComponent } from 'character/profile-image.component';
import { ItemInfoComponent } from 'item/item-info.component';

import { find } from 'lodash';

export class WishlistComponentFixture extends ComponentTestFixture<WishlistComponent> {

    constructor() {
        super(WishlistModule, WishlistComponent);
    }

    public wishlistItemComponents(): Array<WishlistItemComponent> {
        return this.component().wishlistItems.toArray();
    }

    public profileImage(): ProfileImageComponent {
        return this.component().profileImage;
    }

    public wishlistSearchComponent(): WishlistSearchComponent {
        return this.component().search;
    }

    public wishlistItemForSlot(slot: ItemSlot): WishlistItem {
        return find(this.component().wishlist.items, {slot: slot});
    }

    public setItemToSlot(slot: ItemSlot, item: Item): void {
        let wishlistItem = this.wishlistItemForSlot(slot);
        wishlistItem.item = item;
    }

    public selectedItemInfoComponent(): ItemInfoComponent {
        return this.component().selectedInfo;
    }

    public searchItemInfoComponent(): ItemInfoComponent {
        return this.component().searchInfo;
    }

    public hoveredItemInfoComponent(): ItemInfoComponent {
        return this.component().hoveredInfo;
    }

    public hoverWishlistItem(item: WishlistItem) {
        this.hoverElement(this.idForWishlistItem(item));
    }

    public unhoverWishlistItem(item: WishlistItem) {
        this.unhoverElement(this.idForWishlistItem(item));
    }

    public clickWishlistItem(item: WishlistItem) {        
        this.clickElement(this.idForWishlistItem(item));
    }

    private idForWishlistItem(item: WishlistItem) {
        return 'wishlist_' + item.slot.id;
    }
}