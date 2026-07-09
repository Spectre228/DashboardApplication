import { useEffect, useRef, useState } from "react";

export const useScrollModToggler = (scrollTransitionWidth: number): [React.RefObject<HTMLDivElement | null>, boolean] => {
      const contRef = useRef<HTMLDivElement>(null);
      //const initialContWidth = useRef(0);
      const [isScrollable, setIsScrollable] = useState(false);
    
      useEffect(
        () => {
          const cont = contRef.current;
    
          if (!cont) {
            return;
          }
    
          //initialContWidth.current = cont.offsetWidth;
    
          const checkScroll = () => {
            setIsScrollable(cont.offsetWidth < scrollTransitionWidth);
          }
    
          checkScroll();
          window.addEventListener("resize", checkScroll);
    
          return () => window.removeEventListener("resize", checkScroll) ;
        },
        []
      );

      return [contRef, isScrollable];
}