import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users = [
    {
      name: 'Sarah Johnson',
      email: 'sarahj@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-04-20 09:45 AM',
    },
    {
      name: 'Michael Chen',
      email: 'michaelc@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2024-05-19 10:32 AM',
    },
    {
      name: 'Emma Davis',
      email: 'emma.d@example.com',
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '2024-03-02 04:12 PM',
    },
    {
      name: 'James Wilson',
      email: 'james.w@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2024-03-10 07:55 PM',
    },
    {
      name: 'Lisa Brown',
      email: 'lisab@example.com',
      role: 'Viewer',
      status: 'Active',
      lastLogin: '2024-02-28 09:11 AM',
    },
  ];

  showAddUserModal: boolean = false;
  newUser: any = {
    name: '',
    email: '',
    role: 'Viewer',
    status: 'Active',
  };

  onEdit(user: any) {
    console.log('Edit user:', user);
    // To be implemented: modal or route to edit user
  }

  onDelete(user: any) {
    console.log('Delete user:', user);
    // To be implemented: delete confirmation and logic
  }

  addNewUser() {
    this.showAddUserModal = true;
  }

  closeAddUserModal() {
    this.showAddUserModal = false;
    this.newUser = {
      name: '',
      email: '',
      role: 'Viewer',
      status: 'Active',
    };
  }

  submitNewUser() {
    if (this.newUser.name && this.newUser.email) {
      this.users.push({
        ...this.newUser,
        lastLogin: 'Never',
      });
      this.closeAddUserModal();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
