import { NgModule } from '@angular/core';

import { ItemInfoComponent } from 'item/item-info.component';
import { ItemDataService } from 'item/item-data.service';

@NgModule({
    declarations: [ ItemInfoComponent ],
    providers: [ ItemDataService ],
    exports: [ ItemInfoComponent ]
})
export class ItemModule { }