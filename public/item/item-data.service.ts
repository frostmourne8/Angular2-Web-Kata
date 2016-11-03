import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Item, ItemType } from 'item/model';

export interface ItemDataService {
    itemIcon(item: Item): URL;
    itemTypeIcon(type: ItemType): URL;
    itemsForType(type: ItemType): Observable<Array<Item>>;
}