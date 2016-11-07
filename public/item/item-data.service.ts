import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Item, ItemType } from 'item/model';

@Injectable()
export class ItemDataService {

    public itemIcon(item: Item): URL {
        return null;
    }

    public itemTypeIcon(type: ItemType): URL {
        return null;
    }

    public itemsForType(type: ItemType): Observable<Array<Item>> {
        return null;
    }
}