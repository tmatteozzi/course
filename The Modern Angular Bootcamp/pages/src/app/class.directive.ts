import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  @Input('appClass') set classNames(clasObj: any) {
    for (let key in clasObj) {
      if (clasObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private element: ElementRef) {
  }

}
