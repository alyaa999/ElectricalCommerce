import { CommonModule } from '@angular/common';
import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-slider',
  imports: [RouterModule ,FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SliderComponent {


    images: string[] = [
       'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg',
       'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
       'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154827301-81+JXgPUDLL._SL1500_.jpg',
       'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone%2014%20pro%20max.jpg'
     
    ];
  }


