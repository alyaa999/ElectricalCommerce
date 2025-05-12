import { Component, OnInit } from '@angular/core';
import { Catgoery } from '../../Interfaces/Catgory/CatgoryModel';
import { CatgoryService } from '../../Service/catgory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  element: Catgoery = {
    id: 0,
     name: '',
    image: ''

  };

  categories: Catgoery[] = [];

  constructor(private service: CatgoryService) {}

  ngOnInit(): void {
    this.service.getCatgory().subscribe(
      (data: Catgoery[]) => {
        this.categories = data;
        console.log("Categories received:", this.categories);
      }
    );
  }
}
