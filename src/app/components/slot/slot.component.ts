import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent {

  @Input() value: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();


  handleClick() {
    this.clicked.emit();
  }
}
