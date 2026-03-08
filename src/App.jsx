import { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import CountdownPage from './components/CountdownPage';
import NameEntryPage from './components/NameEntryPage';
import CakeInteractionPage from './components/CakeInteractionPage';
import LoveQuestionPage from './components/LoveQuestionPage';
import LoveLetterPage from './components/LoveLetterPage';
import KissPage from './components/KissPage';
import PhotoMemoryPage from './components/PhotoMemoryPage';
import FinalMessagePage from './components/FinalMessagePage';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => s + 1);
  const resetToStart = () => setStep(1);

  const hearts = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${Math.random() * 20 + 10}px`
    }));
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1e0b2e] text-white overflow-hidden relative selection:bg-romantic-400 selection:text-white">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none flex flex-wrap gap-4 overflow-hidden opacity-20">
         {hearts.map((heart, i) => (
            <div 
              key={i} 
              className="text-romantic-500 animate-float"
              style={{
                left: heart.left,
                top: heart.top,
                position: 'absolute',
                animationDelay: heart.animationDelay,
                fontSize: heart.fontSize
              }}
            >
              💜
            </div>
         ))}
      </div>

      <main className="relative z-10 w-full max-w-4xl p-4 flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {step === 1 && <CountdownPage key="step1" onComplete={nextStep} />}
          {step === 2 && <NameEntryPage key="step2" onNext={nextStep} />}
          {step === 3 && <CakeInteractionPage key="step3" onNext={nextStep} />}
          {step === 4 && <LoveQuestionPage key="step4" onNext={nextStep} />}
          {step === 5 && <LoveLetterPage key="step5" onNext={nextStep} />}
          {step === 6 && <KissPage key="step6" onNext={nextStep} />}
          {step === 7 && <PhotoMemoryPage key="step7" onNext={nextStep} />}
          {step === 8 && <FinalMessagePage key="step8" onRestart={resetToStart} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
