<a href="https://github.com/CodeSquar/ai-sdk-starter-cerebras">
  <h1 align="center">Vercel x Cerebras Chatbot</h1>
</a>

<p align="center">
  An open-source AI chatbot app template built with Next.js, the AI SDK by Vercel, and Cerebras.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Streaming text responses powered by the [AI SDK by Vercel](https://sdk.vercel.ai/docs), with [Cerebras](https://cerebras.ai) as the AI provider (e.g. `gpt-oss-120b`).
- Built-in tool integration for extending AI capabilities (demonstrated with a weather tool example).
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=Vercel+x+Cerebras+Chatbot&repository-name=ai-sdk-starter-cerebras&repository-url=https%3A%2F%2Fgithub.com%2FCodeSquar%2Fai-sdk-starter-cerebras&demo-title=Vercel+x+Cerebras+Chatbot&demo-description=A+simple+chatbot+application+built+with+Next.js+that+uses+Cerebras+via+the+AI+SDK)

## Running Locally

1. Clone the [repository](https://github.com/CodeSquar/ai-sdk-starter-cerebras) and install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Set up your environment variables. Copy `.env.example` to `.env.local` and add your [Cerebras API key](https://cloud.cerebras.ai):

   ```bash
   CEREBRAS_API_KEY=your_cerebras_api_key
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI chatbot application.

## Authors

This project is a fork of [Vercel's AI SDK Starter (Groq)](https://github.com/vercel-labs/ai-sdk-starter-groq), adapted to use [Cerebras](https://cerebras.ai) instead of Groq. Maintained by [CodeSquar](https://github.com/CodeSquar).

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
