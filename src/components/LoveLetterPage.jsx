import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MESSAGE = `heyyy princess enakku neena romba pudikkum.
Nee illatha life ah ennala nenaichi kuda pakka mudiyathu.
intha 4 varshathula neraiya sanda vanthurukku.
romba naal pesama kuda irunthurukkom.
ana namma piriyala.
namma bonding dha strong anichi.

soo naa solrathu onne onnu dha
marriage panna athu unna mattum dha.

Nee enakku venum.
namma oru family ah happy ah irukkalam.

LOVEEEEEEEEE YOUUUUUUUUUU THANGOOMEEEEHHHH 💜`;

export default function LoveLetterPage({ onNext }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const speed = 40; // Typing speed in ms
    
    // Quick skip on double click functionality can be added here if desired

    const intervalId = setInterval(() => {
      if (index < MESSAGE.length) {
        setDisplayedText((prev) => prev + MESSAGE.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col items-center justify-center p-6 md:p-12 w-full max-w-2xl bg-romantic-900/40 rounded-3xl backdrop-blur-md border border-romantic-600/30 shadow-[0_0_40px_rgba(147,51,234,0.15)] relative min-h-[400px]"
    >
      <div className="absolute top-4 left-4 text-romantic-500 opacity-30 text-4xl">"</div>
      <div className="absolute bottom-20 right-4 text-romantic-500 opacity-30 text-4xl">"</div>

      <div className="w-full text-left font-serif text-lg md:text-2xl leading-relaxed text-romantic-100 whitespace-pre-wrap min-h-[300px]">
        {displayedText}
        {!isTypingComplete && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 bg-romantic-300 ml-1 h-[0.8em]"
            style={{ verticalAlign: 'baseline' }}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <button
          onClick={onNext}
          className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-romantic-500 to-romantic-400 rounded-full font-bold text-lg cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all"
        >
          Next
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </motion.div>
  );
}
