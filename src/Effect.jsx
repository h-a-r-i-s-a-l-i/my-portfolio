import { useState, useEffect } from 'react';

function TypingEffect({ base = "This is where I ", words, speed = 100, pause = 1000 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" or "erasing"

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];
    const fullText = base + currentWord;

    if (phase === "typing") {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText[charIndex]);
          setCharIndex((i) => i + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setPhase("erasing");
        }, pause);
      }
    } else if (phase === "erasing") {
      if (charIndex > base.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((i) => i - 1);
        }, speed / 2);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
          setWordIndex((i) => (i + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, wordIndex, words, base, speed, pause]);

  return <h2 className="typing">{displayedText}</h2>;
}

export default TypingEffect;