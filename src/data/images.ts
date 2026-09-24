const sortedUrls = (modules: Record<string, string>) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url);

export const logo = Object.values(
  import.meta.glob<string>('../assets/images/gap_logo.jpg', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)[0];

export const heroImages = sortedUrls(
  import.meta.glob<string>('../assets/images/hero/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
);

export const carouselImages = sortedUrls(
  import.meta.glob<string>('../assets/images/carousel/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
);
