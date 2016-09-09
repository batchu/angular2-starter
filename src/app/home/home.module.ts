import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { homeRoutes } from './home.routes';

@NgModule({
    imports : [ homeRoutes ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
