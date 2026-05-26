import { configureStore } from '@reduxjs/toolkit';
import fghujdshgr from "./slices/burgerMenuActivation";
//import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore(
  {
    reducer: {
      menuActiveness: fghujdshgr
    }
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;