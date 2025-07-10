
import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypingEffect = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isPaused) {
        setTimeout(() => setIsPaused(false), pauseTime);
        return;
      }

      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          setIsPaused(true);
          setIsDeleting(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="text-primary font-medium">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypingEffect;
