import { codeToHtml } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

type CodeBlockProps = {
  code: string;
  lang?: "tsx" | "ts" | "css";
};

export async function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
    engine: createJavaScriptRegexEngine(),
  });

  return (
    <div
      className="overflow-x-auto rounded-md text-sm [&_pre]:m-0 [&_pre]:p-4 [&_pre]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
