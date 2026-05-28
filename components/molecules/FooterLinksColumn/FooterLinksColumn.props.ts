export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  lines?: readonly [string, string];
};

export type FooterLinksColumnProps = {
  title: string;
  links: readonly FooterLink[];
};
