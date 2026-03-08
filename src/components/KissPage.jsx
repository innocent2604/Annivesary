import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function KissPage({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      className="flex flex-col items-center justify-center p-8 space-y-16 w-full h-full min-h-[50vh]"
    >
      <motion.h1
        animate={{
          scale: [1, 1.2, 1],
          textShadow: [
            "0px 0px 10px rgba(255,105,180,0.5)",
            "0px 0px 30px rgba(255,105,180,0.9)",
            "0px 0px 10px rgba(255,105,180,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-romantic-300 to-purple-400 text-center"
      >
        Ummmmaaaaaaawwwwhhh 😘
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="group flex items-center gap-2 px-10 py-4 bg-white text-romantic-800 rounded-full font-bold text-xl cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all"
      >
        Next
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}
