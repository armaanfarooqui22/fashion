import { useState } from 'react';
import { Camera } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
}

export function StudioImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel,
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#F3F3F1] text-[#111111]/60 p-6 text-center ${className}`}
      >
        <Camera className="w-6 h-6 mb-2 text-[#111111]/40" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide uppercase">
          {fallbackLabel || 'Fashion Studio'}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F3F3F1]">
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
