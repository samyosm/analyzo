'use client'
import { SentimentDisplay } from "@/components/sentiment-display/SentimentDisplay";
import { ClassifyOutputElement } from "@/util/classify";

export interface ISentimentList {
  out?: ClassifyOutputElement[];
}

export function SentimentList({ out }: ISentimentList) {
  return (
    <div className="flex flex-col gap-8 p-12 overflow-y-auto">
      {Array.isArray(out) ?
        out.map(({ label, score }) =>
          <SentimentDisplay key={label} label={label} value={score} />
        ) :
        <p>Begin to write to see results!</p>
      }
    </div>
  )
}
