import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export default function NameEntryPage({ onNext }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === 'Ragasiyashrijan') {
      setError(false);
      onNext();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex flex-col items-center justify-center p-8 space-y-8 bg-romantic-900/30 p-12 rounded-3xl backdrop-blur-md border border-romantic-600/30 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-20 h-20 bg-gradient-to-tr from-romantic-600 to-romantic-300 rounded-full flex items-center justify-center shadow-lg mb-4"
      >
        <Lock className="w-10 h-10 text-white" />
      </motion.div>

      <h2 className="text-3xl pr-4 md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-romantic-200">
        Enter your name
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center gap-6">
        <div className="relative w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here..."
            className="w-full bg-romantic-950/50 border-2 border-romantic-700/50 rounded-2xl px-6 py-4 text-center text-xl text-white outline-none focus:border-romantic-400 focus:ring-4 focus:ring-romantic-500/20 transition-all placeholder:text-romantic-300/40"
          />
        </div>

        <div className="h-8 flex items-center justify-center">
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: [-5, 5, -5, 5, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-red-400 font-bold text-lg"
              >
                Wrong name
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-romantic-600 to-romantic-400 rounded-full font-bold text-lg border border-romantic-300/30 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all"
        >
          Unlock
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>
    </motion.div>
  );
}
