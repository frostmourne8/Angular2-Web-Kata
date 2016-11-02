import { ComponentTestFixture } from 'tests/component/component.fixture';
import { AppComponent } from 'app/app.component';
import { AppModule } from 'app/app.module';

export class AppComponentFixture extends ComponentTestFixture<AppComponent> {

    constructor() {
        super(AppModule, AppComponent);
    }
}