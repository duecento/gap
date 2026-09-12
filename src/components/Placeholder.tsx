import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}

/** Renders an image, falling back to a branded placeholder if the file isn't in /public/images yet. */
export function Photo({ src, alt, className = '', label }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gap-red/15 to-gap-black/10 text-gap-black/40 ${className}`}
      >
        <span className="px-4 text-center text-sm font-medium">
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
