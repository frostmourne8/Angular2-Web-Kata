import { Component, Input } from '@angular/core';
import { Character } from 'character/model';

@Component({
    selector: 'character-profile-image',
    template: '<img src="{{imageSrc}}"/>'
})
export class ProfileImageComponent {

    public imageSrc: string;
    public character: Character;

    @Input('character')
    set setCharacter(character: Character) {
        this.character = character;
        this.updateImageSrc(character);
    }

    private updateImageSrc(character: Character) {
        //TODO do this
    }
}