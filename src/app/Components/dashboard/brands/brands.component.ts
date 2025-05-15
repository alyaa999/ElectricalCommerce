import { Component } from '@angular/core';
import { TypesBrandService } from '../../../Service/types-brand.service';
import { Brand, BrandToSend } from '../../../Interfaces/TypesBrands/TypesBrand';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brands',
  imports: [CommonModule, FormsModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  brands: Brand[] = [];

  selectedBrand: Brand = {
    id: 0,
    name: ''
  };

    newBrand: BrandToSend = {
    name: ''
  };


  showEditModal = false;
  showDeleteModal = false;
  showViewModal = false;
  showCreateModal = false;

  // Loading states
  saving = false;
  deleting = false;
  creating = false;


  constructor(private brandService: TypesBrandService) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  openCreateModal(): void {
    this.newBrand = { name: '' };
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  createBrand(): void {
    if (!this.newBrand.name) {
      alert('Brand name is required');
      return;
    }

    this.creating = true;
    
    this.brandService.addBrand(this.newBrand).subscribe({
      next: (createdBrand) => {
        this.brands.push(createdBrand);
        this.creating = false;
        this.showCreateModal = false;
        this.loadBrands(); // Refresh the list
      },
      error: (err) => {
        console.error('Error creating brand:', err);
        this.creating = false;
      }
    });
  }


  confirmDelete(id: number) {
    this.deleting = true;
    this.brandService.deleteBrand(id).subscribe(() => {
      this.brands = this.brands.filter(brand => brand.id !== id);
    });
    this.deleting = false;
    this.showDeleteModal = false;
  }

  addBrand(brand: BrandToSend) {
    this.brandService.addBrand(brand).subscribe((newBrand) => {
      this.brands.push(newBrand);
    });
  }

  saveBrand(id: number, brand: BrandToSend) {
    this.saving = true;
    this.brandService.updateBrand(id, brand).subscribe((updatedBrand) => {
      const index = this.brands.findIndex(b => b.id === id);
      if (index !== -1) {
        this.brands[index] = updatedBrand;
      }
    });
    this.showEditModal = false;
    this.saving = false;
  }

  getBrandByTypeId(typeId: number) {
    this.brandService.getBrandById(typeId).subscribe((brand) => {
      this.selectedBrand = brand;
    });
  }


  openEditModal(brand: Brand): void {
    this.selectedBrand = { ...brand };
    this.showEditModal = true;
  }

  openDeleteModal(brand: Brand): void {
    this.selectedBrand = { ...brand };
    this.showDeleteModal = true;
  }

  openViewModal(brand: Brand): void {
    this.selectedBrand = { ...brand };
    this.showViewModal = true;
  }

  // Close Modals
  closeEditModal(): void {
    this.showEditModal = false;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  closeViewModal(): void {
    this.showViewModal = false;
  }

}
