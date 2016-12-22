import { ComponentTestFixture } from 'tests/component/component.fixture';

import { WishlistModule } from 'wishlist/wishlist.module';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';

export class WishlistItemFixture extends ComponentTestFixture<WishlistItemComponent> {

    constructor() {
        super(WishlistModule, WishlistItemComponent);
    }

    public iconSrc(): string {
        return this.elementByClass('menu_item_icon').nativeElement.src;
    }

    public isCheckVisible(): boolean {
        return this.elementByClass('collected_menu_item_check') !== undefined;
    }
}