import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'app/app.component';
import { WishlistModule } from 'wishlist/wishlist.module';

import { Character } from 'character/model';

@NgModule({
    imports: [
        BrowserModule,
        WishlistModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
