import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {lorem} from 'faker'
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
