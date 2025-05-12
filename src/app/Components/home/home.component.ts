import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-home',
  imports: [
    SliderComponent,
    CategoryComponent
    
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
