export interface State {
  modeState: number;
  openState: boolean;
}

export type Action =
  | { type: "SET_MODE_STATE"; payload: number }
  | { type: "SET_OPEN_STATE_FALSE" }
  | { type: "SET_OPEN_STATE_TRUE" };
