import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/loginmodeslice";
import loginReducer from "./slices/loginSlice";
import { useDispatch,TypedUseSelectorHook,useSelector } from "react-redux";
export const store=configureStore({
    reducer: {modeReducer,loginReducer}
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector