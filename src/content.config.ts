import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bits = defineCollection({
  // One folder per bit: src/content/bits/<slug>/index.mdx
  loader: glob({ pattern: '**/index.mdx', base: './src/content/bits' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      dateFormatted: z.string(),
      summary: z.string(),
      thumbnail: image().optional(),
      order: z.number(),
    }),
});

export const collections = { bits };
