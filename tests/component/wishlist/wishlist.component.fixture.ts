import { ComponentTestFixture } from 'tests/component/component.fixture';
import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistModule } from 'wishlist/wishlist.module';

export class WishlistComponentFixture extends ComponentTestFixture<WishlistComponent> {

    constructor() {
        super(WishlistModule, WishlistComponent);
    }

    public wishlistItems(): Array<WishlistItemComponent> {
        return [];
    }
}