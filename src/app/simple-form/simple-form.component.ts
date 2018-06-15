import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text">
      <button (click)="onClick($event, myInput)">点击</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick(event, myInput) {
    console.log(event);
    console.log(myInput);
    console.log(myInput.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
