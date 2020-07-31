import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
  })
  export class AlertComponent implements OnInit {

    closeResult: string;

    constructor() {}

    open() {
   console.log("testing")
      
    }


   

    ngOnInit() {
    }

  }