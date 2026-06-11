import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { Text } from "../Text/Text";
import { companies } from "./companies.data";

interface Company {
  name: string;
  logo: string;
  url: string;
}

interface CompaniesContentProps {
  companies?: Company[];
  speed?: number;
}

export function CompaniesContent({
  companies: companiesProp = companies,
  speed = 80,
}: CompaniesContentProps) {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const titleRef    = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          anime({
            targets: titleRef.current,
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 600,
            easing: "cubicBezier(0.16, 1, 0.3, 1)",
          });

          anime({
            targets: section.querySelectorAll(".logo-item"),
            opacity: [0, 0.7],
            translateY: [16, 0],
            duration: 500,
            delay: anime.stagger(60, { start: 200 }),
            easing: "cubicBezier(0.16, 1, 0.3, 1)",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background-secondary"
    >
      <div ref={titleRef} style={{ opacity: 0 }}>
        <Text
          className="mt-auto py-10 flex flex-col items-center text-text-secondary"
          preset="paragraphSmall"
          bold
        >
          PROJECTS WITH
        </Text>
      </div>

      <motion.div
        className="flex items-center gap-18 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {[...companiesProp, ...companiesProp].map((company, index) => (
          <a
            key={`${company.name}-${index}`}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-item flex items-center"
            style={{ opacity: 0, willChange: "transform, opacity" }}
            onMouseEnter={(e) => {
              anime({
                targets: e.currentTarget,
                scale: 1.08,
                opacity: 1,
                duration: 250,
                easing: "cubicBezier(0.34, 1.56, 0.64, 1)",
              });
            }}
            onMouseLeave={(e) => {
              anime({
                targets: e.currentTarget,
                scale: 1,
                opacity: 0.7,
                duration: 350,
                easing: "cubicBezier(0.16, 1, 0.3, 1)",
              });
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}

