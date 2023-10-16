import React, { Dispatch, createContext, useReducer } from "react";

type AppState = {
  data: {
    id: number;
    title: string;
    image: string;
    text: string;
  }[];
};

type AppAction = {
  type: string;
  payload?: number; // Include other relevant properties if needed
};

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        items: [...state.data, action.payload],
      };
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState: AppState = {
  data: [
    {
      id: 1,
      title: "Add this item to the cart to see what happens",
      image: "/cover-img.webp",
      text: "The animation is almost identical to the one that you can find on the iPhones, looks great on any website.",
    },
    {
      id: 2,
      title: "Try with this one now...",
      image: "/cover-img.webp",
      text: "The animation is almost identical to the one that you can find on the iPhones, looks great on any website.",
    },
    {
      id: 3,
      title: "Let's give it a one more try.",
      image: "/cover-img.webp",
      text: "The animation is almost identical to the one that you can find on the iPhones, looks great on any website.",
    },
    {
      id: 4,
      title: "Things are getting interesting!",
      image: "/cover-img.webp",
      text: "The animation is almost identical to the one that you can find on the iPhones, looks great on any website.",
    },
  ],
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
