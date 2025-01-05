'use client'
import { SentimentDisplay } from "@/components/sentiment-display/SentimentDisplay";
import { use } from "react";

export interface ISentimentList {
  dataPromise: Promise<unknown>;
}

export function SentimentList({ dataPromise }: ISentimentList) {
  const out = use(dataPromise);

  return (
    <div className="flex flex-col gap-8 p-12 overflow-y-auto">
      {Array.isArray(out) ?
        out.map(({ label, score }: { label: string, score: number }) =>
          <SentimentDisplay key={label} label={label} value={score} />
        ) :
        <p>Begin to write to see results!</p>
      }
    </div>
  )
}
