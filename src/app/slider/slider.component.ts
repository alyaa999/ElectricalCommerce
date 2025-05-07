import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  
    images: string[] = [
      'img/1.avif',
      'img/2.avif',
     
    ];
  
    currentImageIndex: number = 1;
    imageUrl: string = '';
   
  ngOnInit() {
    this.imageUrl = this.images[this.currentImageIndex];

    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.imageUrl = this.images[this.currentImageIndex];
    }, 2000); 
  }
 
}
