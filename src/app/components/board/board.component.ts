import { Component, OnInit } from '@angular/core';
import {PlayStore} from "../../store/store";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ClearBoard, ClickSlot} from "../../store/actions";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  @Select(PlayStore.squares) values: Observable<string[]> | undefined;

  constructor(private store: Store) { }

  handleClick(index: number) {
    const squares = this.store.selectSnapshot<string[]>(PlayStore.squares);

    if(squares[index]) {
      return;
    }

    this.store.dispatch(new ClickSlot(index));
  }

  clearBoard() {
    this.store.dispatch(new ClearBoard());
  }
}
