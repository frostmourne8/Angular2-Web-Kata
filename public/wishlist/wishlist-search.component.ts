import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { startsWith } from 'lodash';

import { WishlistItem } from 'wishlist/model';
import { Item, ITEM_SLOTS } from 'item/model';

import { ItemDataService } from 'item/item-data.service';

require('images/items/unknown_item.png');

@Component({
    selector: 'wishlist-search',
    templateUrl: 'wishlist-search.html'
})
export class WishlistSearchComponent {

    @Input() item: WishlistItem;
    @Input() visible: boolean;

    public newItemMatch: Item;

    constructor(private itemDataService: ItemDataService) { }

    public acceptItemClicked() {
        this.item.item = this.newItemMatch;
    }

    public getItemIcon(item: Item): URL {
        return this.itemDataService.itemIcon(item);
    }

    public clearItemClicked() {
        delete this.item.item;
    }

    public collectItemClicked() {
        this.item.collected = !this.item.collected;
    }

    //Arrow function must be used here because the typeahead component does not provide 'this' context
    public search = ($text: Observable<string>): Observable<Array<Item>> => {
        return $text
            .debounceTime(200)
            .distinctUntilChanged()
            .flatMap((this.executeSearch));
    }

    public format(item: Item): string {
        return item.name;
    }

    private executeSearch(term: string): Observable<Array<Item>> {
        let itemType = this.item.item.type;
        return this.itemDataService.itemsForType(itemType)
            .filter(this.filterByTerm(term));
    }

    private filterByTerm(term: string): (items: Item[], index: number) => boolean {
        return (items: Item[], index: number) => {
            let itemName = items[index].name;
            return startsWith(itemName, term);
        };
    }
}