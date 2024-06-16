import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: any = [];
  @Input() headers: any = [];

  @Input() classNames = '';
}
