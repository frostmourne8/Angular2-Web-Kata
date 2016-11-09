import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule, Ng2BootstrapConfig, Ng2BootstrapTheme } from 'ng2-bootstrap/ng2-bootstrap';

import { CharacterModule } from 'character/character.module';
import { ItemModule } from 'item/item.module';

import { WishlistService } from 'wishlist/wishlist.service';
import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component';
import { WishlistOrderPipe } from 'wishlist/wishlist-order.pipe';
import { RadialItemDirective } from 'wishlist/radial-item.directive';

Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2BootstrapModule,
        CharacterModule,
        ItemModule
    ],
    providers: [ WishlistService ],
    declarations: [
        WishlistComponent,
        WishlistItemComponent,
        WishlistSearchComponent,
        WishlistOrderPipe,
        RadialItemDirective
    ],
    exports: [ WishlistComponent ]
})
export class WishlistModule { }
