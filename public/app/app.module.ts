import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from 'app/app.component';
import { WishlistModule } from 'wishlist/wishlist.module';

import { Character } from 'character/model';

const character: Character = new Character('159055468', 'Anteaus', 'Alexstrasza-US');

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        WishlistModule
    ],
    providers: [{ provide: Character, useValue: character }],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
