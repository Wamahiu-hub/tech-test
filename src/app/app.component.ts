// src/app/app.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterPageComponent } from "./pages/register/register.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
}
