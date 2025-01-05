import { SentimentWidget } from "./SentimentWidget";
import { TextWidget } from "./TextWidget";

export default function Home() {
  return (
    <div className="flex h-screen divide-x divide-zinc-200">
      <TextWidget />
      <SentimentWidget />
    </div>
  );
}
