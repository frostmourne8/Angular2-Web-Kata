import { Component } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: 'app.html',
  styleUrls: ['app/app.css']
})
export class AppComponent {

    private clicked: boolean = false;

    public saySomething(something: string): string {
        return 'I said: ' + something;
    }

    public clickComponent() {
        this.clicked = true;
    }

    public wasClicked() {
        return this.clicked;
    }
 }