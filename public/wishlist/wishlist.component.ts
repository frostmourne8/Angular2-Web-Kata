import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { Item } from 'item/model';
import { Character } from 'character/model';
import { CharacterService } from 'character/character.service';
import { ProfileImageComponent } from 'character/profile-image.component';
import { Wishlist, WishlistItem } from 'wishlist/model';
import { WishlistService } from 'wishlist/wishlist.service';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component';
import { ItemInfoComponent } from 'item/item-info.component';

@Component({
    selector: 'wishlist',
    templateUrl: 'wishlist.html',
    styleUrls: ['wishlist.css', 'wishlist-animation.css']
})
export class WishlistComponent {

    public character: Character;
    public wishlist: Wishlist;
    public hoveredItem: WishlistItem;
    public selectedItem: WishlistItem;

    @ViewChildren(WishlistItemComponent) wishlistItems: QueryList<WishlistItemComponent>;
    @ViewChild(ProfileImageComponent) profileImage: ProfileImageComponent;
    @ViewChild('search') search: WishlistSearchComponent;
    @ViewChild('selectedInfo') selectedInfo: ItemInfoComponent;
    @ViewChild('hoveredInfo') hoveredInfo: ItemInfoComponent;
    @ViewChild('searchInfo') searchInfo: ItemInfoComponent;

    constructor(service: WishlistService, characterService: CharacterService) {
        this.character = characterService.currentCharacter();
        this.wishlist = service.wishlistForCharacter(this.character);
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

    public item(item: WishlistItem): Item {
        return item ? item.item : undefined;
    }

    public searchVisible(): boolean {
        return this.selectedItem !== undefined;
    }

    public selectedInfoVisible(): boolean {
        let hasSelected = this.item(this.selectedItem) !== undefined;
        let hasHovered = this.item(this.hoveredItem) !== undefined;

        return hasSelected && !hasHovered;
    }

    public hoveredInfoVisible(): boolean {
        return this.item(this.hoveredItem) !== undefined;
    }

    public searchInfoVisible(): boolean {
        return this.search.newItemMatch !== undefined;
    }
}