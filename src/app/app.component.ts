import { Component } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular4';
  flag:boolean = true;
  number:number = 100;
  forDireCTest(){
    this.flag = false;
    this.number = 111;
  }
}
