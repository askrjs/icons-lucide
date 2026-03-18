import type { IconNode, IconProps } from './types';

export function createIcon(displayName: string, iconNode: IconNode) {
  function Icon({
    size = 20,
    strokeWidth = 2,
    color = 'currentColor',
    class: className,
    title,
    ...rest
  }: IconProps) {
    return (
      <svg
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
        role="img"
        aria-hidden={title ? undefined : 'true'}
        class={className}
      >
        {title && <title>{title}</title>}
        {iconNode.map(([tag, attrs], i) => {
          const Tag = tag as string;
          return <Tag key={i} {...(attrs as Record<string, unknown>)} />;
        })}
      </svg>
    );
  }

  Icon.displayName = displayName;
  return Icon;
}
