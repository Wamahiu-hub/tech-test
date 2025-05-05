import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from "../../admin-sidebar/admin-sidebar.component";
import { ApiService } from '../../../services/api.service';
//import { isAxiosError } from 'axios';;

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  constructor(private apiService: ApiService){}
  users: any[] = [];

  ngOnInit() {
    this.getUsers(); 
  }

  // Fetch user data from the backend API
  async getUsers() {
    try {
      this.users = await this.apiService.getUsers(); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  // Edit action
  onEdit(user: any) {
    console.log('Editing user:', user);
    
  }

  // Delete action
  async onDelete(user: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await this.apiService.deleteUser(user.id); 
        this.users = this.users.filter((u) => u.id !== user.id);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  }

  showAddUserModal: boolean = false;
  
 recruiter = {
    name: '',
    email: '',
    password: '',
    status: 'active'
  };

  

  addNewUser() {
    this.showAddUserModal = true;
  }

  closeAddUserModal() {
    this.showAddUserModal = false;
    this.recruiter = {
      name: '',
      email: '',
      password: '',
      status: 'active'
    };
  }
    async addRecruiter() {
      try {
        const response = await this.apiService.addRecruiter(this.recruiter);
        console.log('Recruiter added:', response.data);
        alert('Recruiter added successfully!');
        this.recruiter = { name: '', email: '', password: '', status: 'active' };
      } catch (error) {
        console.error('Error adding recruiter:', error);
        // if (isAxiosError(error)) {
        //   console.log('Axios error details:', (error as any).response);
        //   const axiosError = error as axios.AxiosError;
        //   alert(axiosError.response?.data?.message || 'Something went wrong!');
        // } else {
        //   alert('Something went wrong!');
        // }
      }      
    }
  
}
