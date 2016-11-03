import { ComponentTestFixture } from 'tests/component/component.fixture';

import { WishlistItem } from 'wishlist/model';
import { ItemSlot } from 'item/model';

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
        return [];
    }

    public profileImage(): ProfileImageComponent {
        return null;
    }

    public wishlistSearchComponent(): WishlistSearchComponent {
        return null;
    }

    public wishlistItemForSlot(slot: ItemSlot): WishlistItem {
        return find(this.component().wishlist.items, {slot: slot});
    }

    public selectedItemInfoComponent(): ItemInfoComponent {
        return null;
    }

    public searchItemInfoComponent(): ItemInfoComponent {
        return null;
    }

    public hoverWishlistItem(item: WishlistItem) {
        
    }

    public clickWishlistItem(item: WishlistItem) {

    }
}