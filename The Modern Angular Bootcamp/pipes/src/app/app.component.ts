import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, NgIf, TitleCasePipe} from "@angular/common";
import {ConvertPipe} from "./convert.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, ConvertPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
