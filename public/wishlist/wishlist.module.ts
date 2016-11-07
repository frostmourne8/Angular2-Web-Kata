import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CharacterModule } from 'character/character.module';
import { ItemModule } from 'item/item.module';

import { WishlistService } from 'wishlist/wishlist.service';
import { WishlistComponent } from 'wishlist/wishlist.component';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        CharacterModule,
        ItemModule
    ],
    providers: [ WishlistService ],
    declarations: [
        WishlistComponent,
        WishlistItemComponent,
        WishlistSearchComponent
    ],
    exports: [ WishlistComponent ]
})
export class WishlistModule { }
