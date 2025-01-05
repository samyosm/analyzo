import { AllTasks, pipeline, PipelineType } from "@huggingface/transformers";

// Use the Singleton pattern to enable lazy construction of the pipeline.
// NOTE: We wrap the class in a function to prevent code duplication (see below).
class PipelineSingletonClass {
  static task = 'text-classification';
  static model = 'SamLowe/roberta-base-go_emotions-onnx';
  static instance: Promise<AllTasks[PipelineType]> | null = null;

  static async getInstance(progress_callback = undefined) {
    if (this.instance === null) {
      this.instance = pipeline(this.task as PipelineType, this.model, { progress_callback });
    }
    return this.instance;
  }
}
const P = () => PipelineSingletonClass

let PipelineSingleton: typeof PipelineSingletonClass;
if (process.env.NODE_ENV !== 'production') {
  // When running in development mode, attach the pipeline to the
  // global object so that it's preserved between hot reloads.
  // For more information, see https://vercel.com/guides/nextjs-prisma-postgres
  if (!global.PipelineSingleton) {
    global.PipelineSingleton = P();
  }
  PipelineSingleton = global.PipelineSingleton;
} else {
  PipelineSingleton = P();
}
export default PipelineSingleton;
