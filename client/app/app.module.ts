/**
 * Created by guabirabadev on 23/06/17.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';

@NgModule({ //transforma a classe em um modulo do angular
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{

}
