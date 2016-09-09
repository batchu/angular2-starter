/* tslint:disable */
import {NgModule} from '@angular/core';
import {APP_PROVIDERS} from './app.providers';
import {AppComponent} from './app.component';
import {appRoutingProviders} from './app.routing';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './home/home.routes';
import {NavbarModule} from "./shared/navbar/navbar.module";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        // TodolistModule,
        BrowserModule,

        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'lazy', loadChildren: 'app/home/home.module#HomeModule' }
])
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
