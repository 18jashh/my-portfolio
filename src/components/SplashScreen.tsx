
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    { text: "Welcome", delay: 0 },
    { text: "to my", delay: 800 },
    { text: "Portfolio", delay: 1600 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Start fade out after showing all text
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 1000); // Wait for fade out animation
        }, 1500);
      }
    }, steps[currentStep]?.delay || 800);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="text-center z-10">
            {/* Logo/Initial animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring", 
                stiffness: 100,
                damping: 10 
              }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-2xl"
            >
              JG
            </motion.div>

            {/* Animated text */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0,
                    y: index <= currentStep ? 0 : 50,
                    scale: index <= currentStep ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className={`font-bold text-foreground ${
                    index === 0 ? 'text-4xl md:text-6xl' :
                    index === 1 ? 'text-2xl md:text-4xl' :
                    'text-4xl md:text-6xl text-primary'
                  }`}
                >
                  {step.text}
                </motion.h1>
              ))}
            </div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStep === steps.length - 1 ? 1 : 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8"
            >
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">Loading...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
