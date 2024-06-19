import {Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'Why its the sky blue?',
      content: 'The sky is blue because it is!'
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like orange!'
    },
    {
      title: 'What color is the cat?',
      content: 'The cat is an orange color!'
    }
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
