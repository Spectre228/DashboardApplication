import { ComponentPropsWithoutRef, ElementType, useEffect, useRef  } from "react";
import styles from "./SlidingHeader.module.scss";

interface SlidingHeaderProps extends ComponentPropsWithoutRef<"div"> {
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    title: string,
};

const SlidingHeader = ({headerType, title, ...otherProps}: SlidingHeaderProps) => {
  
  const HeaderTag = headerType as ElementType;

  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(
    () => {
      const header = headerRef.current;

      if (header) {
        const shift = header.scrollWidth -
                      header.offsetWidth ;
        header.style.setProperty("--reveal-shift", `-${shift}px`);
      }
    },
    [headerRef.current]
  );

  return (
    <div className={styles.header}
                   {...otherProps}>
        <HeaderTag ref={headerRef}>
          {title}
        </HeaderTag>
    </div>
  );
};

export default SlidingHeader;