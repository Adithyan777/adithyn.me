declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { MDXComponents } from 'mdx/types';

  /* Validated in src/lib/content.ts rather than trusted here. */
  export const meta: Record<string, unknown>;

  const MDXContent: ComponentType<{ components?: MDXComponents }>;
  export default MDXContent;
}
