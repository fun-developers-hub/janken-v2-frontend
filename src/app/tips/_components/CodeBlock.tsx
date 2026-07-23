import { codeToHtml } from "shiki";

type CodeBlockProps = {
  code: string;
  lang?: "tsx" | "ts" | "css";
};

export async function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <div
      className="overflow-x-auto rounded-md text-sm [&_pre]:m-0 [&_pre]:p-4 [&_pre]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
