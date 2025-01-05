'use client';
import { TitleBar } from "@/components/title-bar/TitleBar";
import { useTextStore } from "./TextStore";
import { useDebouncedCallback } from "use-debounce";
import wordsCount from "words-count";

export function TextWidget() {
  const { text, updateText } = useTextStore();

  const debounced = useDebouncedCallback(
    (content: string) => {
      updateText(content);
    },
    1000
  )

  return (
    <section className="w-full flex flex-col">
      <TitleBar label="Text Content">
        {wordsCount(text)} words
      </TitleBar>
      <textarea
        onInput={(e) => debounced(e.currentTarget.value)}
        defaultValue={text}
        className="w-full min-h-52 md:min-h-0 h-full outline-none p-12 text-lg"
        placeholder="Begin writing..."
      />
    </section>

  )
}
