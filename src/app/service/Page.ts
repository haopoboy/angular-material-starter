export interface Page<T> {
  content: T[];
}

export class PageImpl<T> implements Page<T> {
  static of(content: any): Page<any> {
    if (Array.isArray(content)) {
      return new PageImpl(content);
    } else {
      return new PageImpl([content]);
    }
  }

  constructor(public content: any[]) {}
}
