import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { blog } from '.source';

export const source = loader({
  baseUrl: '/cheatsheets',
  source: createMDXSource(blog),
});
export const {
  getPage: getCheatsheet,
  getPages: getCheatsheets,
  pageTree,
} = source;

export type Cheatsheet = ReturnType<typeof getCheatsheet>;

const cheatsheets = getCheatsheets();

export const getSortedByDateCheatsheets = () =>
  cheatsheets.toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const getTags = () => {
  const tagSet = new Set<string>();

  for (const cheatsheet of cheatsheets) {
    if (cheatsheet.data.tags) {
      for (const tag of cheatsheet.data.tags) {
        tagSet.add(tag);
      }
    }
  }

  return Array.from(tagSet).toSorted();
};

export const getCheatsheetsByTag = (tag: string) => {
  return cheatsheets
    .filter((cheatsheet) => cheatsheet.data.tags?.includes(tag))
    .toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
