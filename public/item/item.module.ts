import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ItemInfoComponent } from 'item/item-info.component';
import { ItemDataService } from 'item/item-data.service';

@NgModule({
    declarations: [ ItemInfoComponent ],
    imports: [ HttpModule ],
    providers: [ ItemDataService ],
    exports: [ ItemInfoComponent ]
})
export class ItemModule { }