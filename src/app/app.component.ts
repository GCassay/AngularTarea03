import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretWord = false;
  clickCounter = 0;
  logStyles = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  showSecret() {
    this.secretWord = !this.secretWord;
    this.clickCounter++;
    this.logs.push(this.clickCounter);
  }
}
