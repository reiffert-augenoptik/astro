declare global {
  interface Frontmatter {
    /**
     * The text alignment of the page. By default, text is left-aligned.
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';
    /**
     * The maximum width of the content. Defaults to `medium`.
     * For values, see {@link [variables](./styles/variables.css)}.
     * @default 'medium'
     */
    width?: 'small' | 'medium' | 'large' | 'full';
  }
}

export {};
