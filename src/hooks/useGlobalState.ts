import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "_contexts/rootState";

export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector;
