export const mutationSnippet = `async function postJankenHand(userHand: string) {
  const res = await fetch("https://janken.ma41.net/janken", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_hand: userHand }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? "リクエストに失敗しました");
  }
  return data as { cpu_hand: string; result: string };
}

function Demo() {
  // status/message を自前で持つ代わりに、useMutation が
  // idle/pending/error/success の状態と data/error を管理してくれる
  const mutation = useMutation({ mutationFn: postJankenHand });

  return (
    <button onClick={() => mutation.mutate("rock")}>
      グー（状態: {mutation.status}）
    </button>
  );
}
`;

export const providerSnippet = `// useMutation/useQuery を使うには、コンポーネントツリーの上位を
// QueryClientProvider で包む必要がある（このデモではDemo内で完結させている）
const [queryClient] = useState(() => new QueryClient());

<QueryClientProvider client={queryClient}>
  <Demo />
</QueryClientProvider>
`;
