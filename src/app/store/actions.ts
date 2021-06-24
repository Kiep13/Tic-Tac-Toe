export class ClickSlot {
  static readonly type = '[Board] Update Squares';
  constructor(public payload: number) { }
}

export class ClearBoard {
  static readonly type = '[Board] Clear History';
}
