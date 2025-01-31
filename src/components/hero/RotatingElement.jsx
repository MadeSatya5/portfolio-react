import { motion } from "framer-motion";

export default function RotatingElement() {
  return (
    <div>
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
        <img src="/image/earth.png" alt="Earth" className="w-[450px]" />
      </motion.div>
    </div>
  );
}
