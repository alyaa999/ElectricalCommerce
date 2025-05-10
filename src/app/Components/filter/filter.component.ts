import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  public categories: {id:number, name:string, checked:boolean}[] = [
    {id:1, name:"Smart Screens", checked:false},
    {id:2, name:"Head Phones", checked:false}
  ]

  public brands: {name:string, checked:boolean}[] = [
    {name:"Samsung", checked:false},
    {name:"LG", checked:false},
    {name:"Huwie", checked:false},
    {name:"Apple", checked:false}
  ]

  public minPrice: number = 100
  public maxPrice: number = 5000

  // Component logic
  selectedRating: number | null = null;

  selectRating(rating: number): void {
    if (this.selectedRating === rating) {
      this.selectedRating = null; // Deselect if same rating clicked again
    } else {
      this.selectedRating = rating;
    }
  }
}
