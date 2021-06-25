import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: string = '';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();


  handleClick() {
    this.clicked.emit();
  }
}
