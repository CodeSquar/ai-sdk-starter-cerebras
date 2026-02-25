import { cerebras } from "@ai-sdk/cerebras";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

const languageModels = {
  "cerebras/gpt-oss-120b": cerebras("gpt-oss-120b") as any,
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "cerebras/gpt-oss-120b";
