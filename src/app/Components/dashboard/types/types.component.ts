import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Type, TypeToSend } from '../../../Interfaces/TypesBrands/TypesBrand';
import { TypesBrandService } from '../../../Service/types-brand.service';

@Component({
  selector: 'app-types',
  imports: [CommonModule, FormsModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {

  types: Type[] = [];

  selectedType: Type = {
    id: 0,
    name: '',
    image: ''
  };


  showEditModal = false;
  showDeleteModal = false;
  showViewModal = false;

  // Loading states
  saving = false;
  deleting = false;

  selectedFile: File | null = null;


  showCreateModal = false;
  creating = false;
  newType = { name: '' };
  newTypeFile: File | null = null;



  constructor(private typeService: TypesBrandService) { }

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes(): void {
    this.typeService.getTypes().subscribe((data) => {
      this.types = data;
    });
  }

    handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  confirmDelete(id: number) {
    this.deleting = true;
    this.typeService.deleteType(id).subscribe(() => {
      this.types = this.types.filter(type => type.id !== id);
      this.deleting = false;
      this.showDeleteModal = false;
    });
  }

  saveType(id: number): void {
    if (!this.selectedType.name) {
      alert('Type name is required');
      return;
    }

    this.saving = true;
    
    // const typeToSend: TypeToSend = {
    //   name: this.selectedType.name,
    //   picture: this.selectedFile as File // Cast to File since we've validated it
    // };

    const formData = new FormData();
  formData.append('name', this.selectedType.name);
  
  // Only append the file if a new one was selected
  if (this.selectedFile) {
    formData.append('Picture', this.selectedFile, this.selectedFile.name);
  }

    this.typeService.updateType(id, formData).subscribe({
      next: (updatedType) => {
        const index = this.types.findIndex(t => t.id === id);
        if (index !== -1) {
          this.types[index] = updatedType;
        }
        this.saving = false;
        this.showEditModal = false;
        this.selectedFile = null; // Reset the selected file
      },
      error: (err) => {
        console.error('Error updating type:', err);
        this.saving = false;
      }
    });
  }


  // Create Type

  openCreateModal(): void {
    this.newType = { name: '' };
    this.newTypeFile = null;
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  handleNewFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.newTypeFile = input.files[0];
    }
  }

  createType(): void {
    if (!this.newType.name || !this.newTypeFile) {
      alert('Both name and picture are required');
      return;
    }

    this.creating = true;
    
    const formData = new FormData();
    formData.append('name', this.newType.name);
    formData.append('Picture', this.newTypeFile, this.newTypeFile.name);

    this.typeService.addType(formData).subscribe({
      next: (createdType) => {
        this.types.push(createdType);
        this.creating = false;
        this.showCreateModal = false;
        this.loadTypes(); // Refresh the list
      },
      error: (err) => {
        console.error('Error creating type:', err);
        this.creating = false;
      }
    });
  }



  openEditModal(type: Type): void {
    this.selectedType = { ...type };
    this.showEditModal = true;
  }

  openDeleteModal(type: Type): void {
    this.selectedType = { ...type };
    this.showDeleteModal = true;
  }

  openViewModal(type: Type): void {
    this.selectedType = { ...type };
    this.showViewModal = true;
  }

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
