interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.25em] uppercase mb-3
            ${light ? 'text-red-400' : 'text-red-600'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight
          ${light ? 'text-white' : 'text-[#1A1A1A]'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl
            ${centered ? 'mx-auto' : ''}
            ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
