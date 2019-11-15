import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-firethings',
  template: `
    <p>
      firethings works!
    </p>
  `,
  styles: []
})
export class FirethingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('OK')
  }

}
