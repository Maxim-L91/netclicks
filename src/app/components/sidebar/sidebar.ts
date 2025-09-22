import { Component, } from '@angular/core';
import { INFO } from '../../constants/sidebar.constants';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  sidebarItems = INFO;
}
