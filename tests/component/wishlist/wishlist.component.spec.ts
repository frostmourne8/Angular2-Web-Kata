import { difference, values } from 'lodash';

import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistFixture } from './wishlist.fixture';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component';
import { ProfileImageComponent } from 'character/profile-image.component';
import { ItemInfoComponent } from 'item/item-info.component';
import { ITEM_SLOTS, ItemSlot, Item, ItemIdentifier } from 'item/model';
import { WishlistItem } from 'wishlist/model';
import { Character } from 'character/model';

import {details} from 'tests/component/item/item-test-data';

const ALL_ITEM_SLOTS = values(ITEM_SLOTS);

describe('WishlistComponent', () => {

    let character: Character;
    let fixture: WishlistFixture;

    beforeEach(() => {
        fixture = new WishlistFixture();
    });

    it('should display the profile image of the current character', () => {
        let profileImage: ProfileImageComponent = fixture.profileImage();
        
        expect(profileImage).toBeDefined();
        expect(profileImage.character).toBe(fixture.component().character);
    });

    it('should display a wishlist item for each item slot', () => {
        let wishlistSlots: Array<ItemSlot> = fixture.wishlistItemComponents().map((wishListItem) => {
            return wishListItem.item.slot;
        });

        expect(wishlistSlots.length).toBe(ALL_ITEM_SLOTS.length);
        expect(difference(wishlistSlots, ALL_ITEM_SLOTS).length).toBe(0);
    });

    it('should hide the item search component by default', () => {
        expect(fixture.wishlistSearchComponent().visible).toBe(false);
    });

    it('should display the item search when a slot is selected', () => {
        let item: WishlistItem = selectItemSlot(ITEM_SLOTS.RING1);

        fixture.verify(() => {
            expect(fixture.wishlistSearchComponent().visible).toBe(true);
        });
    });

    it('should set the wishlist item search to the currently selected wishlist item', () => {
        let item: WishlistItem = selectItemSlot(ITEM_SLOTS.BELT);

        fixture.verify(() => {
            expect(fixture.wishlistSearchComponent().item).toBe(item);
        });
    });

    it('should hide the wishlist item info panel by default', () => {
        expect(fixture.selectedItemInfoComponent().visible).toBe(false);
    });

    it('should display the info panel for the currently selected wishlist item', () => {
        let item: WishlistItem = selectItemSlot(ITEM_SLOTS.CHEST, true);
        let infoPanel: ItemInfoComponent = fixture.selectedItemInfoComponent();

        fixture.verify(() => {
            expect(infoPanel.visible).toBe(true);
            expect(infoPanel.item).toBe(item.item);
        });
    });

    it('should display the info panel for the currently hovered wishlist item', () => {
        let item: WishlistItem = hoverItemSlot(ITEM_SLOTS.BRACERS, true);
        let infoPanel: ItemInfoComponent = fixture.hoveredItemInfoComponent();

        fixture.verify(() => {
            expect(infoPanel.visible).toBe(true);
            expect(infoPanel.item).toBe(item.item);
        });
    });

    it('should not display the search component while an item is hovered and not selected', () => {
        hoverItemSlot(ITEM_SLOTS.BELT, true);

        fixture.verify(() => {
            expect(fixture.wishlistSearchComponent().visible).toBe(false);
        });
    });

    it('should display the search component while an item is hovered and selected', () => {
        selectItemSlot(ITEM_SLOTS.SHOULDERS, true);
        hoverItemSlot(ITEM_SLOTS.CLOAK, true);

        let infoPanel: ItemInfoComponent = fixture.hoveredItemInfoComponent();
        let search: WishlistSearchComponent = fixture.wishlistSearchComponent();
        
        fixture.verify(() => {
            expect(infoPanel.visible).toBe(true);
            expect(search.visible).toBe(true);
        });
    });

    it('should prefer the info panel of the hovered wishlist item over the selected wishlist item', () => {
        selectItemSlot(ITEM_SLOTS.SHOULDERS, true);
        hoverItemSlot(ITEM_SLOTS.CLOAK, true);

        let selectedInfoPanel: ItemInfoComponent = fixture.selectedItemInfoComponent();
        let hoveredInfoPanel: ItemInfoComponent = fixture.hoveredItemInfoComponent();

        fixture.verify(() => {
            expect(selectedInfoPanel.visible).toBe(false);
            expect(hoveredInfoPanel.visible).toBe(true);
        });
    });

    it('should hide the info panel for the item search by default', () => {
        expect(fixture.searchItemInfoComponent().visible).toBe(false);
    });

    it('should display the info panel for the currently selected item in the item search', () => {
        let slot: ItemSlot = ITEM_SLOTS.OFF_HAND;
        let newItem = createFakeItem(slot);
        selectItemSlot(slot);

        fixture.wishlistSearchComponent().newItemMatch = newItem;
        let infoPanel: ItemInfoComponent = fixture.searchItemInfoComponent();

        fixture.verify(() => {
            expect(infoPanel.visible).toBe(true);
            expect(infoPanel.item).toBe(newItem);
        });        
    });

    it('should highlight the selected item', () => {
        let item: WishlistItem = selectItemSlot(ITEM_SLOTS.PANTS);

        fixture.verify(() => {
            expect(item.highlighted).toBe(true);
        });
    });

    it('should highlight the hovered item', () => {
        let item: WishlistItem = hoverItemSlot(ITEM_SLOTS.PANTS);

        fixture.verify(() => {
            expect(item.highlighted).toBe(true);
        });
    });

    it('should highlight the selected and hovered items if there are both', () => {
        let selectedItem: WishlistItem = selectItemSlot(ITEM_SLOTS.PANTS);
        let hoveredItem: WishlistItem = hoverItemSlot(ITEM_SLOTS.NECK);

        fixture.verify(() => {
            expect(selectedItem.highlighted).toBe(true);
            expect(hoveredItem.highlighted).toBe(true);
        });
    });

    it('should unhighlight a hovered item if it is unhovered', () => {
        let slot: ItemSlot = ITEM_SLOTS.NECK;
        let item: WishlistItem = hoverItemSlot(slot);
        unhoverItemSlot(slot);

        fixture.verify(() => {
            expect(item.highlighted).toBe(false);
        });
    });

    it('should unhighlight the previous selected item when a new item is selected', () => {
        let selectedItem: WishlistItem = selectItemSlot(ITEM_SLOTS.PANTS);
        let newSelectedItem: WishlistItem = selectItemSlot(ITEM_SLOTS.HELM);

        fixture.verify(() => {
            expect(selectedItem.highlighted).toBe(false);
            expect(newSelectedItem.highlighted).toBe(true);
        });
    });

    function selectItemSlot(slot: ItemSlot, withItem?: boolean): WishlistItem {
        if(withItem === true) {
            fixture.setItemToSlot(slot, createFakeItem(slot));
        }

        let item: WishlistItem = fixture.wishlistItemForSlot(slot);
        fixture.clickWishlistItem(item);

        return item;
    }

    function hoverItemSlot(slot: ItemSlot, withItem?: boolean): WishlistItem {
        if(withItem === true) {
            fixture.setItemToSlot(slot, createFakeItem(slot));
        }

        let item: WishlistItem = fixture.wishlistItemForSlot(slot);
        fixture.hoverWishlistItem(item);

        return item;
    }

    function unhoverItemSlot(slot: ItemSlot): WishlistItem {
        let item: WishlistItem = fixture.wishlistItemForSlot(slot);
        fixture.unhoverWishlistItem(item);

        return item;
    }

    function createFakeItem(slot: ItemSlot): Item {
        let identifier = new ItemIdentifier('anId', 'aName', slot.type);
        return new Item(identifier, details);
    }
});