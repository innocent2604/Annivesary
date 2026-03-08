import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LoveQuestionPage({ onNext }) {
  const [agreed, setAgreed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 3;
    
    // Ensure button moves far enough away from the cursor
    let dx = (Math.random() - 0.5) * maxX * 1.5;
    let dy = (Math.random() - 0.5) * maxY * 1.5;
    
    // Keep it somewhat on screen
    if (Math.abs(dx) < 50) dx += 100 * Math.sign(dx || 1);
    
    setNoPosition({
      x: Math.max(-maxX, Math.min(maxX, dx)),
      y: Math.max(-maxY, Math.min(maxY, dy))
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center p-8 space-y-12 w-full "
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
        Do you love me?
      </h2>

      {!agreed ? (
        <div className="flex gap-6 md:gap-12 relative w-full justify-center min-h-[150px] items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setAgreed(true)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full font-bold text-xl cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Yes
          </motion.button>

          <motion.div
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute md:relative"
            style={noPosition.x !== 0 ? { marginLeft: '120px' } : {}}
          >
            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="px-8 py-3 bg-red-500 text-white rounded-full font-bold text-xl shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
              No
            </button>
          </motion.div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="flex flex-col items-center gap-8"
          >
            <h3 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400 animate-pulse text-center leading-relaxed max-w-lg">
               Enakku theriyum unakku enna tha pudikkumnu 💜
            </h3>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="group flex items-center gap-2 px-8 py-4 bg-romantic-600 border border-romantic-400 rounded-full font-bold text-lg cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              Next
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
