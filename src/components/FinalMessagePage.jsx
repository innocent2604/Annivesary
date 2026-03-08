import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

export default function FinalMessagePage({ onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex flex-col items-center justify-center p-8 space-y-12"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full max-w-2xl bg-gradient-to-br from-romantic-800/80 to-romantic-900/60 p-10 md:p-14 rounded-[30px] backdrop-blur-lg border-2 border-romantic-400/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative"
      >
        <div className="absolute -top-6 -right-6 text-6xl animate-bounce">
          💜
        </div>
        <div className="absolute -bottom-6 -left-6 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>
          ✨
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-romantic-200 to-white text-center leading-tight drop-shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
          Princess unna kandippa mrg pannippa ok vah 💜
        </h2>
        
        {/* Decorative divider */}
        <div className="flex justify-center items-center mt-12 gap-4">
           <div className="h-px w-16 bg-gradient-to-r from-transparent to-romantic-300" />
           <div className="w-3 h-3 rotate-45 bg-romantic-400" />
           <div className="h-px w-16 bg-gradient-to-l from-transparent to-romantic-300" />
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="group flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-romantic-400 text-romantic-200 rounded-full font-bold text-xl cursor-pointer hover:bg-romantic-400/20 hover:text-white transition-all shadow-lg"
      >
        <RotateCcw className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
        Close
      </motion.button>
    </motion.div>
  );
}
