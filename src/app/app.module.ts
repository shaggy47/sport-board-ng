import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {LoginCmponent} from './login.component';

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent,LoginCmponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}

