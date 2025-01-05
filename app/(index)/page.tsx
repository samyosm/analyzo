'use client'
import { SentimentWidget } from "./SentimentWidget";
import { TextWidget } from "./TextWidget";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col md:flex-row h-screen divide-x divide-zinc-200">
        <TextWidget />
        <SentimentWidget />
      </div>
    </QueryClientProvider>
  );
}
