import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styles: [`
    .whiteText {
      color: #fff;
    }
  `]
})
export class CodeComponent implements OnInit {

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
