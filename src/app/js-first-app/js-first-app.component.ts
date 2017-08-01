import { AppComponent }   from '../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-first-app',
  templateUrl: './js-first-app.component.html',
  styleUrls: ['./js-first-app.component.css']
})
export class JsFirstAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  };
  title: "Название";

}
