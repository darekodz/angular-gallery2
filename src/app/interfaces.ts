export class Format {
  id: number;
  name: string;
  url: string;
  imgSrc: string;
  desc: string;
}

export class Tag {
  id: number;
  name: string;
  url: string;
  format: number;
}

export class Template {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
  tag: number[];
  format: number;
}
