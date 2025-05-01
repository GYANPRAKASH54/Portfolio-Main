import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  const typeText = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
    }

    // If deleting is complete
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    // If word is typed completely
    if (!isDeleting && displayText === currentWord) {
      // Wait for a moment before deleting
      setIsWaiting(true);
      setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
    }
  }, [words, wordIndex, displayText, isDeleting, delayBetweenWords]);

  useEffect(() => {
    if (isWaiting) return;

    const timer = setTimeout(() => {
      typeText();
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typeText, deleteSpeed, typeSpeed, isWaiting]);

  return { text: displayText, isTyping: !isWaiting || isDeleting };
};