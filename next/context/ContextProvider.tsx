import { createContext, Dispatch, useContext, useReducer } from 'react';
import { Action, State } from '../types/context';
import reducer from './reducer';

const initialState: State = {
  pageTab: 0,
};

type ContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

const Context = createContext<ContextValue>({
  state: initialState,
  dispatch: () => {},
});

export const useContextValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
