import { SentimentDisplay } from "@/components/sentiment-display/SentimentDisplay";
import { TitleBar } from "@/components/title-bar/TitleBar";

export function SentimentWidget() {
  return (
    <section className="w-full max-w-2xl">
      <TitleBar label="Sentiment">
        <p
          className="border-b border-b-zinc-200 border-dotted"
          title="This widget uses an AI"
        >
          How?
        </p>
      </TitleBar>
      <div className="flex flex-col gap-8 p-12">
        <SentimentDisplay label="confusion" value={1} />
        <SentimentDisplay label="fear" value={0.50} />
        <SentimentDisplay label="fear" value={0.532} />
        <SentimentDisplay label="fear" value={0.0001} />
      </div>
    </section>

  )
}
