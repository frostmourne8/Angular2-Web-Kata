import { Component } from '@angular/core';
import { Item } from 'item/model';

@Component({
    selector: 'item-info',
    inputs: ['item'],
    templateUrl: 'item-info.html'
})
export class ItemInfoComponent {

    public item: Item;
    public visible: boolean;
}