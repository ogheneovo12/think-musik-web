import { ReactElement, useEffect, useState } from "react";
import { Animate } from "react-move";

interface AnimateProgressBarproviderProps {
  valueStart?: number;
  valueEnd: number;
  duration: number;
  easingFunction?: any;
  repeat?: boolean;
  children(value: number): ReactElement;
}

function AnimateProgressProvider({
  repeat = false,
  valueStart = 100,
  children,
  duration,
  valueEnd,
  easingFunction,
}: AnimateProgressBarproviderProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (repeat) {
      interval = window.setInterval(() => {
        setIsAnimated((prev) => !prev);
      }, duration * 1000);
    } else {
      setIsAnimated((prev) => !prev);
    }
    return () => {
      window.clearInterval(interval);
    };
  }, [duration, repeat]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
}

export default AnimateProgressProvider;
