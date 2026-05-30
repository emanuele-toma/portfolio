// Bit ids come through as `<slug>/index`; the folder name is the public slug.
export function bitSlug(id: string): string {
  return id.replace(/\/index$/, '');
}
