import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect } from 'react';

interface LightboxProps {
  images: string[];
  index: number | null;
  onChange: (index: number | null) => void;
}

export function Lightbox({ images, index, onChange }: LightboxProps) {
  const isOpen = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onChange, step]);

  const buttonClass =
    'absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white';

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => onChange(null)}
        >
          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Close"
            className={`${buttonClass} right-4 top-4`}
            onClick={() => onChange(null)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            className={`${buttonClass} left-4 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className={`${buttonClass} right-4 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
