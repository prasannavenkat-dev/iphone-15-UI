import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  menuItems = ["Store","Mac","iPad","iPhone","Watch","AirPods","TV & Home","Entertainment","Accessories","Support"]
}
