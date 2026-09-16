import { configureStore } from '@reduxjs/toolkit';
import burgerMenuActivationReducer from "./slices/burgerMenuActivation";
import settingsReducer from "./slices/Settings";
import { hotelsInfoApi } from "./slices/HotelsInfoApi";

export const store = configureStore(
  {
    reducer: {
      menuActiveness: burgerMenuActivationReducer,
      settings: settingsReducer,
      [hotelsInfoApi.reducerPath]: hotelsInfoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(hotelsInfoApi.middleware);
    }, 
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;