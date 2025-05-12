import { Component, OnInit } from '@angular/core';
import { CatgoryService } from '../../Service/catgory.service';
import { Catgoery, Brand } from '../../Interfaces/Catgory/CatgoryModel';
import { BrandService } from '../../Service/brand.service';
import { FilterService } from '../../Service/filter.service'; // استيراد خدمة الفلتر

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  element: Catgoery = {
    id: 0,
    name: '',
    image: ''
  };
  categories: Catgoery[] = [];
  brand: Brand = {
    name: '',
    id: 0
  };
  Brands: Brand[] = [];
  
  public minPrice: number = 100;
public Price: number = 1000;

  selectedCategoryId: number |null=null;  
  selectedBrandId: number | null = null;  
  selectedPriceRange:number =this.Price; ;  

  constructor(
    private service: CatgoryService,
    private BrandSer: BrandService,
    private filterService: FilterService 
  ) {}

  ngOnInit(): void {
    this.service.getCatgory().subscribe(
      (data: Catgoery[]) => {
        this.categories = data;
        console.log("Categories received:", this.categories);
      }
    );
    
    this.BrandSer.getBrands().subscribe(
      (data: Brand[]) => {
        this.Brands = data;
      }
    );
  }

  onCategoryChange(id:number) {
    this.selectedCategoryId=id
    this.filterService.updateFilter({
      typeId: this.selectedCategoryId,
      brandId: this.selectedBrandId,
      price: this.selectedPriceRange
    });
  }

  onBrandChange(id:number) {
    this.selectedBrandId=id
    this.filterService.updateFilter({
      typeId: this.selectedCategoryId,
      brandId: this.selectedBrandId,
      price: this.selectedPriceRange
    });
  }


  onPriceChange(event: any) {
 const price = parseFloat(event.target.value); 
  if (isNaN(price)) {
    console.error('Invalid price value');
    return;
  }

  this.selectedPriceRange = price;
    this.filterService.updateFilter({
    typeId: this.selectedCategoryId,
    brandId: this.selectedBrandId,
    price: this.selectedPriceRange
  });
}

restCatgoryFilter()
{
  this.selectedCategoryId=null;
  this.filterService.updateFilter({
      typeId: this.selectedCategoryId,
      brandId: this.selectedBrandId,
      price: this.selectedPriceRange
    });
}
restBrandFilter()
{
   this.selectedBrandId=null;
  this.filterService.updateFilter({
      typeId: this.selectedCategoryId,
      brandId: this.selectedBrandId,
      price: this.selectedPriceRange
    });
}


}
