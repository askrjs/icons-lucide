export type IconNode = ReadonlyArray<
  readonly [tag: string, attrs: Readonly<Record<string, string>>]
>;

export type IconProps = {
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  class?: string;
  title?: string;
  [key: string]: unknown;
};
