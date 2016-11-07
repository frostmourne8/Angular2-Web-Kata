import { NgModule } from '@angular/core';

import { CharacterService } from 'character/character.service';
import { ProfileImageComponent } from 'character/profile-image.component';

@NgModule({
    providers: [ CharacterService ],
    declarations: [ ProfileImageComponent ],
    exports: [ ProfileImageComponent ]
})
export class CharacterModule { }