// src/content/config.ts
import { defineCollection, z } from "astro:content";

const wiki = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    module: z.string(),
    moduleTitle: z.string(),
    order: z.number().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    videoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  wiki,
};
