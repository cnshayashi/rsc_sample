import React, { createContext, useContext, useState } from 'react';

export default function makeContext<T>(initialState: T): [
  ({ children }: { children: React.ReactNode }) => React.JSX.Element,
  () => T,
  () => React.Dispatch<React.SetStateAction<T>>
] {
  const storeContext = createContext<T>(null!);
  const dispatchContext = createContext<React.Dispatch<React.SetStateAction<T>>>(null!);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState(initialState);

    return (
      <dispatchContext.Provider value={setState}>
        <storeContext.Provider value={state}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return useContext(storeContext);
  }
  function useDispatch() {
    return useContext(dispatchContext);
  }

  return [Provider, useStore, useDispatch];
}
