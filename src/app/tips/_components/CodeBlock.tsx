type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-md bg-slate-900 p-4 text-sm text-slate-100">
      <code className="font-mono whitespace-pre">{code}</code>
    </pre>
  );
}
