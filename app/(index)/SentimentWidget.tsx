'use client'
import { TitleBar } from "@/components/title-bar/TitleBar";
import { useTextStore } from "./TextStore";
import { Suspense } from "react";
import { SentimentList } from "./SentimentList";
import { Fallback } from "@/components/fallback/Fallback";
import Link from "next/link";

async function getData(text: string) {
  const raw = await fetch('/api/classify', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text,
    })
  });

  return raw.json();

}

export function SentimentWidget() {
  const { text } = useTextStore();

  return (
    <section className="w-full max-w-2xl h-full flex flex-col">
      <TitleBar label="Sentiment">
        <Link
          href="https://github.com/samyosm/analyzo#how"
          className="border-dotted hover:underline"
          title="This widget uses an AI"
        >
          How?
        </Link>
      </TitleBar>
      <Suspense fallback={<Fallback />}>
        <SentimentList dataPromise={getData(text)} />
      </Suspense>
    </section>

  )
}
