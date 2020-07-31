import { Component, OnInit, AfterViewInit } from '@angular/core';
  import noUiSlider from "nouislider";


@Component({
  selector: 'app-tabs-section',
  templateUrl: './tabs-section.component.html',
  styleUrls: ['./tabs-section.component.css']
})
export class TabsSectionComponent implements OnInit {
  page = 2;
  page1 = 3;
  sldrvalue;
 // public slider;

  constructor() { }

  ngOnInit() {
  //this.sldrvalue="88";
  }

    ngAfterViewInit(){

    	 var slider = document.getElementById("amtsldr");
    	 //var slider: noUiSlider.Instance = document.getElementById('amtsldr') as noUislider.Instance;


      	var slider1 = document.getElementById("amtsldr1");
      	var slider2 = document.getElementById("amtsldr2");
      	var inputNumber = document.getElementById('input-number');
	  	

 	noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
     });

    noUiSlider.create(slider1, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
     });

    noUiSlider.create(slider2, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
     });

  /*slider.noUiSlider.on('change.one', function () { 
    console.log("slider"+slider.noUiSlider.get());
		//inputNumber.value = slider.noUiSlider.get();
		//console.log(this.slider.noUiSlider.get());
		//this.sldrvalue =this.slider.noUiSlider.get();
	});

	/*inputNumber.addEventListener('change', function () {
   			// html5Slider.noUiSlider.set([null, this.value]);
      		slider.noUiSlider.set(inputNumber.value);
	});*/

    
    }
}
declare module noUiSlider {
       
       interface noUiSlider {
           
       }

       interface Instance extends HTMLElement {
           noUiSlider: noUiSlider
       }
}