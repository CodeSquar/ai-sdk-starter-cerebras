import Link from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">Vercel x Cerebras Chatbot</h1>
      <p className="text-center">
        This starter project uses <Link href="https://cerebras.ai/">Cerebras</Link>{" "}
        with the <Link href="https://sdk.vercel.ai/docs">AI SDK</Link>.
      </p>
    </div>
  );
};

