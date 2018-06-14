import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {

  constructor() {
    console.log('construct first component!');
  }

  ngOnInit() {
    console.log('call ngOnInit!');
  }

}
