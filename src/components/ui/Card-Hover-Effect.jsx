import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Bounce } from "react-reveal";

export const CardHover = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Bounce right delay={400}>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ",
            className
          )}
        >
          {items.map((item, idx) => (
            <a
              href={item?.link}
              target="blank"
              key={item?.link}
              className="relative group  block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-dark-green  block rounded-3xl z-0"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className>
                <div className="h-64 z-10">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="object-cover h-full w-full rounded-xl z-10"
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </a>
          ))}
        </div>
      </Bounce>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-dark-green/[0.2] group-hover:border-dark-green relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4 font-bricolage",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm font-bricolage",
        className
      )}
    >
      {children}
    </p>
  );
};
