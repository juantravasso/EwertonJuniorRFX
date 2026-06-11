import { useEffect, useRef } from "react";
import anime from "animejs";
import { Box } from "../../../../components/Box/Box";
import { Button } from "../Button/Button";
import Invideo from "../../../../assets/invideo.png";

const EASING = "cubicBezier(0.16, 1, 0.3, 1)";

export function HomeContent() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iconRef    = useRef<HTMLImageElement>(null);
  const arrowRef   = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    anime({
      targets: wrapperRef.current,
      opacity: [0, 1],
      translateX: [-10, 0],
      duration: 600,
      delay: 1000,
      easing: EASING,
    });
  }, []);

  const handleMouseEnter = () => {
    anime({
      targets: iconRef.current,
      scale: [1, 1.12],
      rotate: [0, -5],
      duration: 300,
      easing: "cubicBezier(0.34, 1.56, 0.64, 1)",
    });
    anime({
      targets: arrowRef.current,
      rotate: [0, 45],
      scale: [1, 1.1],
      duration: 300,
      easing: "cubicBezier(0.34, 1.56, 0.64, 1)",
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: [iconRef.current, arrowRef.current],
      scale: 1,
      rotate: 0,
      duration: 350,
      easing: EASING,
    });
  };

  return (
    <Box
      ref={wrapperRef}
      style={{ opacity: 0 }}
      className="w-full mt-18 mb-18 flex flex-col items-center px-10"
    >
      <Button
        href="https://invideo.io/i/ewertonjuniorrfx/"
        className="w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className="flex items-center justify-between w-full">
          <Box className="flex items-center gap-3">
            <img
              ref={iconRef}
              src={Invideo}
              alt="Logo"
              className="w-10 dark:drop-shadow-[0_0_2px_white]"
              style={{ willChange: "transform" }}
            />
            <span>Invideo</span>
          </Box>

        </Box>
      </Button>
    </Box>
  );
}
