import { motion } from "framer-motion";

export default function RotatingElement() {
  return (
    <div className="pt-5">
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
        <img src="/image/earth.png" alt="Earth" className="md:w-[450px] sm:w-[290px] w-[120px]" />
      </motion.div>
    </div>
  );
}
