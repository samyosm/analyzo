import PipelineSingleton from '@/pipeline';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  if (!text) {
    return NextResponse.json({
      error: 'Missing text parameter',
    }, { status: 400 });
  }
  const classifier = await PipelineSingleton.getInstance();

  const result = await classifier(text, { top_k: null });

  return NextResponse.json(result);
}
