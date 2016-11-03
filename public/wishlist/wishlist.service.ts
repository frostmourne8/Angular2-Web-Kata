import { Injectable } from '@angular/core';

import { Character } from 'character/model';
import { Wishlist } from 'wishlist/model';

@Injectable()
export class WishlistService {

    public wishlistForCharacter(character: Character): Wishlist {
        return new Wishlist(); //TODO handle persistence
    }
}