import { Component, Input } from '@angular/core';
import { Character } from 'character/model';

@Component({
    selector: 'character-profile-image',
    template: '<div class="profile_image" style="background: url({{imageSrc}}) center;"></div>'
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
        this.imageSrc = 'http://render-api-us.worldofwarcraft.com/static-render/us/alexstrasza/108/159055468-profilemain.jpg';
    }
}