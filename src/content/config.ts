import { z, defineCollection } from "astro:content";

const arguments_ = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    claim: z.string(),
    verdict: z.enum(["false", "misleading", "unsupported", "outdated"]),
    category: z.enum([
      "evolution",
      "geology",
      "physics",
      "biology",
      "cosmology",
      "general",
    ]),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
    publishedDate: z.coerce.date(),
  }),
});

const records = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["legal", "credentials", "conduct"]),
    summary: z.string(),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

const quotes = defineCollection({
  type: "content",
  schema: z.object({
    quote: z.string(),
    source: z.string(),
    date: z.coerce.date().optional(),
    videoUrl: z.string().url().optional(),
    timestamp: z.string().optional(),
    rebuttalSummary: z.string(),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

export const collections = {
  arguments: arguments_,
  records,
  quotes,
};
