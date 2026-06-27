import GradientText from "./GradientText";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlightedWord?: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, highlightedWord, description }: SectionHeaderProps) {
  const titleParts = highlightedWord
    ? title.split(highlightedWord)
    : [title];

  return (
    <div className="text-center mb-16 max-w-2xl mx-auto">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
        {highlightedWord ? (
          <>
            {titleParts[0]}
            <GradientText>{highlightedWord}</GradientText>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-slate-400 text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
