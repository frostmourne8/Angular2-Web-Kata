import { Component, Input } from '@angular/core';
import { Character } from 'character/model';

@Component({
    selector: 'profile-image',
    template: '<div class="profile_image" style="background: url(\'http:\/\/render-api-us.worldofwarcraft.com/static-render/us/alexstrasza/108/159055468-profilemain.jpg\') center;"></div>',
    styleUrls: [ 'character.css' ]
})
export class ProfileImageComponent {

    public character: Character;

    @Input('character')
    set setCharacter(character: Character) {
        this.character = character;
    }
}