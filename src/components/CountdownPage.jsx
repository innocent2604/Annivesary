import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-03-20T00:00:00').getTime();

export default function CountdownPage({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsUnlocked(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center text-center space-y-8 p-6"
    >
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-romantic-300 to-romantic-100 drop-shadow-lg">
          Our Special Day
        </h1>
        <motion.div className="absolute -top-6 -right-6 text-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
          ✨
        </motion.div>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-8 my-8">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center p-4 bg-romantic-900/40 rounded-2xl backdrop-blur-sm border border-romantic-700/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
              {item.value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-romantic-200 uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>

      {isUnlocked ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="px-8 py-4 bg-gradient-to-r from-romantic-600 to-romantic-500 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-romantic-400/50 cursor-pointer"
        >
          Unlock Surprise 🔓
        </motion.button>
      ) : (
        <p className="text-romantic-300 italic animate-pulse">Waiting for the perfect moment...</p>
      )}

      {/* Secret bypass for testing uncomment if needed */}
      <button onClick={onComplete} className="opacity-0 fixed bottom-0 right-0 w-10 h-10"></button>
    </motion.div>
  );
}
