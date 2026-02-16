interface SectionIntroProps {
  title: string;
  description: string;
}

export function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <div className="mb-8 space-y-2">
      <h1 className="section-title">{title}</h1>
      <p className="max-w-3xl text-slate-600">{description}</p>
    </div>
  );
}
