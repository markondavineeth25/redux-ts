import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ROOTSTATE} from "../state";

export const useTypedSelector: TypedUseSelectorHook<ROOTSTATE> = useSelector;