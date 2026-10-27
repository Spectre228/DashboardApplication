import { configureStore } from '@reduxjs/toolkit';
import { BurgerMenuActivationReducer } from "../../widgets/BurgerMenu";
import { SettingsReducer } from "../../pages/SettingsPage";
import { hotelsInfoApi } from "../../pages/DashBoardsPage";

export const store = configureStore(
  {
    reducer: {
      menuActiveness: BurgerMenuActivationReducer,
      settings: SettingsReducer,
      [hotelsInfoApi.reducerPath]: hotelsInfoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(hotelsInfoApi.middleware);
    }, 
  }
);

declare global {
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
}