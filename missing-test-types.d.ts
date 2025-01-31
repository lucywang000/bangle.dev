// This exists to allow for our custom psx syntax for creating a
// prosemirror document.
namespace JSX {
  export interface IntrinsicElements {
    para: any;
    doc: any;
    heading: any;
    blockquote: any;
    ul: any;
    ol: any;
    li: any;
    bulletList: any;
    orderedList: any;
    codeBlock: any;
    listItem: any;
    br: any;
    link: any;
    underline: any;
  }
}

namespace jest {
  interface Matchers<R> {
    toEqualDocAndSelection(expected: any): R;
    toEqualDocument(expected: any): R;
  }
}
