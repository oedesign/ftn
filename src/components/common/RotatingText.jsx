import { useEffect, useState } from 'react';

const inspirationalTexts = [
  '“Let us not become weary in doing good.” — Galatians 6:9',
  'Nourishing communities with dignity, compassion, and hope.',
  '“Whoever is kind to the poor lends to the Lord.” — Proverbs 19:17',
  'Together we can feed families, empower skills, and strengthen futures.'
];

function RotatingText({ intervalMs = 5000 }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((current) => (current + 1) % inspirationalTexts.length);
        setIsVisible(true);
      }, 250);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div className="mx-auto w-full max-w-xl px-2 text-center">
      <p
        className={`text-xs font-medium text-emerald-800 sm:text-sm transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
        }`}
        aria-live="polite"
      >
        {inspirationalTexts[index]}
      </p>
    </div>
  );
}

export default RotatingText;
