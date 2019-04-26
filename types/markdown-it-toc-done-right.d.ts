/** Declaration file generated by dts-gen */
declare module 'markdown-it-toc-done-right' {
  import MarkdownIt = require('markdown-it')
  import Core = require('markdown-it/lib/parser_core')

  export = MarkdownItTocDoneRight
  namespace MarkdownItTocDoneRight {
    type Slugify = (x: string) => string
    type HtmlEncoder = (x: string) => string
    interface Options {
      placeholder: string
      slugify: Slugify
      containerClass: string | 'table-of-contents'
      listClass?: string
      itemClass?: string
      linkClass?: string
      level: number
      listType: 'ol' | 'ul'
      format?: (x: string, htmlencode: HtmlEncoder) => string
    }
  }

  function MarkdownItTocDoneRight(
    md: MarkdownIt,
    options: MarkdownItTocDoneRight.Options
  ): void
}
