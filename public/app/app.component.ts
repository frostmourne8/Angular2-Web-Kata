import { Component, ViewEncapsulation } from '@angular/core';

require('images/wow-world-of-warcraft.jpg');

@Component({
    selector: 'body',
    templateUrl: 'app.html',
    styleUrls: ['app.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }