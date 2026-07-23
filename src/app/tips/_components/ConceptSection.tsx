import type { ReactNode } from "react";

type ConceptSectionProps = {
  title: string;
  explanation: ReactNode;
  demo: ReactNode;
};

export function ConceptSection({
  title,
  explanation,
  demo,
}: ConceptSectionProps) {
  return (
    <article>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <section className="mb-8">
        <h3 className="mb-2 text-lg font-bold">説明</h3>
        <div className="flex flex-col gap-3 text-sm leading-relaxed">
          {explanation}
        </div>
      </section>
      <section>
        <h3 className="mb-2 text-lg font-bold">実装例</h3>
        <div className="flex flex-col gap-4">{demo}</div>
      </section>
    </article>
  );
}
