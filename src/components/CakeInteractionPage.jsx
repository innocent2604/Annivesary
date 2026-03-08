import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CakeInteractionPage({ onNext }) {
  const [candles, setCandles] = useState([true, true, true, true]);
  const [allBlown, setAllBlown] = useState(false);

  const toggleCandle = (index) => {
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);
  };

  useEffect(() => {
    if (candles.every((c) => !c)) {
      setTimeout(() => setAllBlown(true), 500);
    }
  }, [candles]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center p-6 space-y-12 w-full max-w-2xl relative"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-romantic-200 to-pink-200 drop-shadow-md">
          {allBlown ? "Yay!" : "Make a wish and blow out the candles..."}
        </h2>
      </div>

      {/* The Cake */}
      <div className="relative mt-20 flex flex-col items-center">
        {/* Candles Container */}
        <div className="flex gap-4 md:gap-8 mb-[-10px] z-10">
          {candles.map((isOn, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col items-center cursor-pointer group"
              onClick={() => toggleCandle(idx)}
            >
              {/* Flame */}
              <AnimatePresence>
                {isOn && (
                  <motion.div
                    exit={{ opacity: 0, scale: 0, y: -20, transition: { duration: 0.3 } }}
                    className="absolute -top-10 w-6 h-8 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] origin-bottom filter blur-[1px] shadow-[0_0_20px_rgba(255,165,0,0.8)]"
                    animate={{
                      scaleY: [1, 1.1, 0.9, 1.05, 1],
                      rotate: [-2, 2, -1, 3, -2],
                    }}
                    transition={{
                      duration: 0.5 + Math.random() * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Candle Body */}
              <div className="w-4 h-16 bg-gradient-to-b from-pink-200 to-romantic-300 rounded-t-sm shadow-inner overflow-hidden relative border border-romantic-400/50">
                {/* Candle Stripes */}
                {[...Array(4)].map((_, i) => (
                   <div key={i} className="w-full h-2 bg-pink-400/30 transform rotate-12 my-2" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cake Layers */}
        <div className="w-64 md:w-80 h-24 bg-gradient-to-r from-romantic-700 to-romantic-600 rounded-[50%_50%_0_0_/_20%_20%_0_0] relative shadow-xl overflow-hidden border-t border-romantic-400/30">
           {/* Frosting drips */}
           <div className="absolute top-0 w-full h-6 flex justify-around">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="w-8 h-8 md:h-10 bg-romantic-200 rounded-full -mt-4 shadow-sm" />
             ))}
           </div>
        </div>
        <div className="w-72 md:w-96 h-28 bg-gradient-to-r from-romantic-800 to-romantic-700 rounded-b-xl shadow-2xl relative border-t-2 border-romantic-900 border-b-4 border-romantic-950/50">
           {/* Decorative dots */}
           <div className="absolute top-4 w-full px-4 flex justify-between">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-pink-300 rounded-full opacity-60" />
              ))}
           </div>
           {/* Base plate */}
           <div className="absolute -bottom-4 -ml-4 w-80 md:w-[26rem] h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-[50%_50%_50%_50%] shadow-lg -z-10" />
        </div>
      </div>

      <AnimatePresence>
        {allBlown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="flex flex-col items-center mt-12 gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-romantic-200 to-purple-300 animate-pulse drop-shadow-[0_0_15px_rgba(233,213,255,0.6)]">
              Happy 4th Anniversary Princessssss 💜
            </h1>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-romantic-600 to-romantic-400 rounded-full font-bold text-lg cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              Next
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
