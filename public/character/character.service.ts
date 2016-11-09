import { Injectable } from '@angular/core';

import { Character } from 'character/model';

const CHARACTER: Character = new Character('159055468', 'Anteaus', 'Alexstrasza-US');

@Injectable()
export class CharacterService {

    public currentCharacter(): Character {
        //TODO allow switching of characters
        return CHARACTER;
    }
}