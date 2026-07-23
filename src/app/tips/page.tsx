import Link from "next/link";

import { concepts } from "./_data/concepts";

export default function TipsIndexPage() {
  return (
    <ul className="flex flex-col gap-4">
      {concepts.map(concept => (
        <li key={concept.slug}>
          <Link
            href={`/tips/${concept.slug}`}
            className="block rounded-md border border-slate-300 p-4 hover:border-slate-400">
            <div className="text-newblue text-sm font-bold">
              {concept.phaseLabel}
            </div>
            <div className="text-lg font-bold">{concept.title}</div>
            <p className="text-sm text-slate-600">{concept.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
