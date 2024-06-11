import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ClassDirective} from "./class.directive";
import {TimesDirective} from "./times.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  images = [
    {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Misty Forest",
      url: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wildflower Field",
      url: "https://images.unsplash.com/photo-1503040309319-516b4cf9320d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Vibrant City",
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    }, {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Misty Forest",
      url: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wildflower Field",
      url: "https://images.unsplash.com/photo-1503040309319-516b4cf9320d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Vibrant City",
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    }, {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Misty Forest",
      url: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wildflower Field",
      url: "https://images.unsplash.com/photo-1503040309319-516b4cf9320d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Vibrant City",
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    }, {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Misty Forest",
      url: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wildflower Field",
      url: "https://images.unsplash.com/photo-1503040309319-516b4cf9320d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Vibrant City",
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    }, {
      title: "At the Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Misty Forest",
      url: "https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wildflower Field",
      url: "https://images.unsplash.com/photo-1503040309319-516b4cf9320d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Vibrant City",
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    }
  ];

  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
