import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Dates are written as "YYYY-MM" (for example "2026-08"). Text that still needs
// Mohammad's input starts with "TODO:" and shows as a placeholder while site.showTodos is true.
const month = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY-MM, for example 2026-08');

const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roles' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    orgUrl: z.string().url().optional(),
    location: z.string().optional(),
    start: month.optional(),
    end: z.union([month, z.literal('present')]).optional(),
    // school = classroom and coordination roles, external = IBEN/CIS/etc., earlier = pre-PYP roles
    group: z.enum(['school', 'external', 'earlier', 'research']),
    order: z.number(),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    event: z.string(),
    host: z.string(),
    date: month,
    role: z.enum(['Presenter', 'Co-presenter', 'Co-facilitator']),
    format: z.enum(['In person', 'Virtual']).optional(),
    participants: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    photoNeeded: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    titleAr: z.string().optional(),
    outlet: z.string(),
    type: z.enum(['Dissertation', 'Article', 'Interview', 'Conference']),
    language: z.enum(['English', 'Arabic']),
    date: month,
    url: z.string().url().optional(),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

const snapshots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/snapshots' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    caption: z.string(),
    image: image(),
    alt: z.string(),
    order: z.number(),
    unit: z.string().optional(),
    consent: z.enum(['documented', 'not documented', 'unknown']),
    facesBlurred: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    school: z.string(),
    order: z.number(),
    context: z.string(),
    studentsDid: z.string(),
    learning: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    photoNeeded: z.string().optional(),
  }),
});

export const collections = { roles, workshops, writing, snapshots, projects };
