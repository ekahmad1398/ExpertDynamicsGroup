import { Children, isValidElement, useEffect, useRef, useState } from "react";

function useInView({ amount = 0.18, once = true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: amount,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [amount, once]);

  return { isVisible, ref };
}

export function Reveal({
  amount = 0.18,
  axis = "y",
  children,
  className,
  delay = 0,
  distance = 24,
  once = true,
}) {
  const { isVisible, ref } = useInView({ amount, once });
  const directionClass = axis === "x" ? "reveal-x" : "reveal-y";

  return (
    <div
      className={className}
      ref={ref}
      style={{
        "--reveal-delay": `${delay}s`,
        "--reveal-distance": `${distance}px`,
      }}
      data-visible={isVisible ? "true" : "false"}
      data-reveal=""
      data-axis={axis}
    >
      <div className={`reveal-shell ${directionClass}`}>{children}</div>
    </div>
  );
}

export function Stagger({
  amount = 0.12,
  children,
  className,
  delayChildren = 0.05,
  once = true,
  staggerChildren = 0.08,
}) {
  const { isVisible, ref } = useInView({ amount, once });

  return (
    <div
      className={className}
      ref={ref}
      data-stagger={isVisible ? "true" : "false"}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return (
          <div
            className="stagger-item"
            style={{
              "--reveal-delay": `${delayChildren + index * staggerChildren}s`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
