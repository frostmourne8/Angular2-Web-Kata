import { Component, Input } from '@angular/core';
import { Item } from 'item/model';

@Component({
    selector: 'item-info',
    templateUrl: 'item-info.html'
})
export class ItemInfoComponent {

    @Input() item: Item;
    @Input() visible: boolean;
}