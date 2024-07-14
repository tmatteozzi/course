import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label!: string;
  @Input() inputType!: string;
  @Input() controlType: string = 'input';
  @Input() control = new FormControl();

  constructor() {
  }

  showErrors() {
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }
}
