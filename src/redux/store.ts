import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./loginmodeslice";
import { useDispatch,TypedUseSelectorHook,useSelector } from "react-redux";
export const store=configureStore({
    reducer: {modeReducer}
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector