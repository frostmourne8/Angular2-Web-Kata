import { NgModule }      from '@angular/core';

import { CharacterModule } from 'character/character.module';
import { ItemModule } from 'item/item.module';

import { WishlistService } from 'wishlist/wishlist.service'; 
import { WishlistComponent }   from 'wishlist/wishlist.component';
import { WishlistItemComponent } from 'wishlist/wishlist-item.component';
import { WishlistSearchComponent } from 'wishlist/wishlist-search.component';

@NgModule({
  imports: [
    CharacterModule,
    ItemModule
  ],
  providers: [ WishlistService ],
  declarations: [
    WishlistComponent,
    WishlistItemComponent,
    WishlistSearchComponent
  ]
  
})
export class WishlistModule { }
