import { useReducer } from "react";

import { type State, Action } from "../types";

// 1. create an initial state
const initialState = {
  modeState: 1,
  openState: false,
};

// 2. Create the reducer
function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "SET_OPEN_STATE_TRUE") {
    console.log("it's working", state.modeState, state.openState);
    return {
      ...state,
      openState: true,
    };
  }

  if (type === "SET_OPEN_STATE_FALSE") {
    return {
      ...state,
      openState: false,
    };
  }

  if (type === "SET_MODE_STATE") {
    return {
      ...state,
      modeState: action.payload,
    };
  }

  return state;
}

export function useStore() {
  const [{ modeState, openState }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setOpenStateFalse = () => {
    dispatch({ type: "SET_OPEN_STATE_FALSE" });
  };

  const setOpenStateTrue = () => {
    dispatch({ type: "SET_OPEN_STATE_TRUE" });
  };

  const setDataMode = (payload: number) => {
    dispatch({ type: "SET_MODE_STATE", payload });
  };

  return {
    modeState,
    openState,
    setOpenStateFalse,
    setOpenStateTrue,
    setDataMode,
  };
}
