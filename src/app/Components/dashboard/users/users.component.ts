import { Component } from '@angular/core';
import { GetAllUsersService } from '../../../Service/get-all-users.service';
import { UsersData } from '../../../Interfaces/Users/Users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

   users: UsersData[] = [];
  selectedUser: UsersData = {
    id: '',
    displayName: '',
    userName: '',
    email: '',
    phoneNumber: ''
  };

  showViewModal = false;
  showDeleteModal = false;

  // Loading states
  deleting = false;
  loading = true;

  constructor(private usersService: GetAllUsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.loading = false;
      }
    });
  }

  confirmDelete(userId: string) {
    this.deleting = true;
    this.usersService.deleteUser(userId).subscribe({
      next: (success) => {
        if (success) {
          this.users = this.users.filter(user => user.id !== userId);
        } else {
          console.error('Failed to delete user');
        }
        this.deleting = false;
        this.showDeleteModal = false;
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.deleting = false;
      }
    });
  }

  openViewModal(user: UsersData): void {
    this.selectedUser = { ...user };
    this.showViewModal = true;
  }

  openDeleteModal(user: UsersData): void {
    this.selectedUser = { ...user };
    this.showDeleteModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

}
