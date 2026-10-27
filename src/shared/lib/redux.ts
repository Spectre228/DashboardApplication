import { useDispatch, useSelector } from "react-redux";


export const useDispatchDistrib = () => useDispatch<AppDispatch>() ;

export const useSliceSelector = <ST>(
    selector: (state: RootState) => ST
) => useSelector(selector) ;