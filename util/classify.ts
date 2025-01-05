'use server'
import PipelineSingleton from '@/pipeline';

export interface ClassifyOutputElement {
  label: string;
  score: number;
}

export async function classify(text: string) {
  const classifier = await PipelineSingleton.getInstance();

  //@ts-expect-error That's the library
  const out = await classifier(text, { top_k: null });
  return out as ClassifyOutputElement[]
}
