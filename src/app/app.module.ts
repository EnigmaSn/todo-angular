import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { JsFirstAppComponent } from './js-first-app/js-first-app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, JsFirstAppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
