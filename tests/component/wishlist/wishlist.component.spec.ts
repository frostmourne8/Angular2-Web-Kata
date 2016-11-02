import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistComponentFixture } from './wishlist.component.fixture';
import { ITEM_TYPES } from 'app/model';

describe('WishlistComponent', () => {

    let fixture: WishlistComponentFixture;

    beforeEach(() => {
        fixture = new WishlistComponentFixture();
    });

    it('should display a wishlist item for each item slot', () => {
        let itemTypes = fixture.wishlistItems().map((wishListItem) => {
            return wishListItem.type;
        });


    });
});