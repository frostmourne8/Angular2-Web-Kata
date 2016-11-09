import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { startsWith } from 'lodash';

import { WishlistItem } from 'wishlist/model';
import { Item, ItemIdentifier, ITEM_SLOTS } from 'item/model';

import { ItemDataService } from 'item/item-data.service';

require('images/items/unknown_item.png');
require('images/checkmark.png');

@Component({
    selector: 'wishlist-search',
    templateUrl: 'wishlist-search.html'
})
export class WishlistSearchComponent {

    @Input() item: WishlistItem;
    @Input() visible: boolean;

    public searchTerm: string;
    public dataSource: Observable<Array<ItemIdentifier>>;
    public newItemMatch: Item;

    constructor(private itemDataService: ItemDataService) { 
        this.dataSource = Observable.create((observer: any) => {
            observer.next(this.searchTerm);
        }).debounceTime(200)
          .distinctUntilChanged()
          .flatMap((term: string) => {
              return this.executeSearch(term);
          });
    }

    public acceptItemClicked() {
        this.item.item = this.newItemMatch;
    }

    public itemSelected(identifier: ItemIdentifier) {
        this.itemDataService.itemInfo(identifier).subscribe((item: Item) => {
            this.newItemMatch = item;
        });
    }

    public getItemIcon(item: Item): string {
        return this.itemDataService.itemIcon(item);
    }

    public clearItemClicked() {
        delete this.item.item;
    }

    public collectItemClicked() {
        this.item.collected = !this.item.collected;
    }

    private executeSearch(term: string): Observable<Array<ItemIdentifier>> {
        let itemType = this.item.slot.type;
        return this.itemDataService.itemsForType(itemType)
            .map(this.filterByTerm(term));
    }

    private filterByTerm(term: string): (typeItems: Array<ItemIdentifier>) => Array<ItemIdentifier> {
        let query = new RegExp(term, 'ig');
        return (typeItems: Array<ItemIdentifier>) => {
            return typeItems.filter(item => query.test(item.name));
        }
    }
}