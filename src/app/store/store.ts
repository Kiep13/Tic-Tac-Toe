import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {ClearBoard, ClickSlot} from "./actions";
import {GameStateModel} from "./interfaces";

const GAME_STATE_TOKEN = new StateToken<GameStateModel>('game');

@State({
  name: GAME_STATE_TOKEN,
  defaults: {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    isXNext: true
  }
})
@Injectable()
export class PlayStore {

  @Selector()
  static squares(state: GameStateModel) {
    const history = state.history;
    return history[history.length - 1].squares.slice();
  }

  @Selector()
  static isXNext(state: GameStateModel) {
    return state.isXNext;
  }

  @Action(ClickSlot)
  updateSquares(context: StateContext<GameStateModel>, action: ClickSlot) {
    const state = context.getState() as unknown as GameStateModel;
    const history = state.history;
    const squares = history[history.length - 1].squares.slice();

    const isXNext = state.isXNext;
    squares[action.payload] = isXNext? 'X' : 'O';

    history.push({
      squares
    });

    context.setState({
      ...state,
      history: [
        ...history,
      ],
      isXNext: !isXNext
    })
  }

  @Action(ClearBoard)
  clearBoard(context: StateContext<GameStateModel>) {
    context.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      isXNext: true
    })
  }
}
