'use client'
import { TitleBar } from "@/components/title-bar/TitleBar";
import { useTextStore } from "./TextStore";
import { SentimentList } from "./SentimentList";
import { Fallback } from "@/components/fallback/Fallback";
import Link from "next/link";
import { classify } from "@/util/classify";
import { useQuery } from "@tanstack/react-query";

export function SentimentWidget() {
  const { text } = useTextStore();

  const { isPending, data: out } = useQuery({
    queryKey: ['text', text],
    queryFn: () =>
      classify(text),
  })


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
      {isPending ? <Fallback /> : <SentimentList out={out} />}

    </section>

  )
}
