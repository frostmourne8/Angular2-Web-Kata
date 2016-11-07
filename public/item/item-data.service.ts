import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { values } from 'lodash';

import { Item, ItemType, ITEM_TYPES } from 'item/model';

const TYPE_ICONS: Map<ItemType,string> = new Map<ItemType,string>();
TYPE_ICONS.set(ITEM_TYPES.HELM, require('images/items/helm.png'));
TYPE_ICONS.set(ITEM_TYPES.NECK, require('images/items/amulet.png'));
TYPE_ICONS.set(ITEM_TYPES.CHEST, require('images/items/chest.png'));
TYPE_ICONS.set(ITEM_TYPES.GLOVES, require('images/items/gloves.png'));
TYPE_ICONS.set(ITEM_TYPES.BRACERS, require('images/items/bracers.png'));
TYPE_ICONS.set(ITEM_TYPES.SHOULDERS, require('images/items/shoulders.png'));
TYPE_ICONS.set(ITEM_TYPES.CLOAK, require('images/items/cloak.png'));
TYPE_ICONS.set(ITEM_TYPES.BELT, require('images/items/belt.png'));
TYPE_ICONS.set(ITEM_TYPES.BOOTS, require('images/items/boots.png'));
TYPE_ICONS.set(ITEM_TYPES.PANTS, require('images/items/pants.png'));
TYPE_ICONS.set(ITEM_TYPES.WEAPON, require('images/items/weapon.png'));
TYPE_ICONS.set(ITEM_TYPES.OFF_HAND, require('images/items/shield.png'));
TYPE_ICONS.set(ITEM_TYPES.TRINKET, require('images/items/trinket.png'));
TYPE_ICONS.set(ITEM_TYPES.RING, require('images/items/ring.png'));

@Injectable()
export class ItemDataService {

    public itemIcon(item: Item): string {
        return null;
    }

    public itemTypeIcon(type: ItemType): string {
        return TYPE_ICONS.get(type);
    }

    public itemsForType(type: ItemType): Observable<Array<Item>> {
        return null;
    }
}