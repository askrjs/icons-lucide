# @askrjs/icons-lucide

Thin Askr wrappers for the [Lucide](https://lucide.dev) SVG icon set.

## Install

```bash
npm install @askrjs/icons-lucide
```

Requires `@askrjs/askr` as a peer dependency.

## Usage

```tsx
import { Search, X, Menu } from '@askrjs/icons-lucide';

function App() {
  return (
    <div>
      <Search />
      <X size={16} />
      <Menu color="blue" strokeWidth={1.5} />
    </div>
  );
}
```

### All props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `20` | `width` and `height` of the svg |
| `strokeWidth` | `number` | `2` | SVG stroke width |
| `color` | `string` | `currentColor` | SVG stroke colour |
| `class` | `string` | — | CSS class applied to the svg element |
| `title` | `string` | — | Accessible title; also removes `aria-hidden` |
| `...rest` | — | — | Any other prop is forwarded to the `<svg>` element |

## Accessibility

By default every icon renders with `aria-hidden="true"` so it is invisible to screen readers and you are responsible for providing context via surrounding text.

To make an icon meaningful on its own, pass a `title` prop:

```tsx
<Search title="Search" />
```

This removes `aria-hidden` and renders a `<title>` element inside the SVG, making it readable by assistive technology.

## Tree shaking

Each icon is a named export. Import only what you use:

```tsx
// ✅ Only Search is included in your bundle
import { Search } from '@askrjs/icons-lucide';

// ✅ Deep import — same effect, explicit path
import { Search } from '@askrjs/icons-lucide/icons/search';
```

The package is marked `"sideEffects": false` and built with `preserveModules`, so bundlers can eliminate unused icons completely.

## Philosophy

This package is a **binding layer**, not an icon framework. It does not:

- provide a string-based `<Icon name="x" />` API
- ship a runtime icon registry
- add any styling opinions or theme coupling
- depend on Lucide at runtime

`createIcon` is a thin factory that closes over static SVG node data and returns a plain Askr component function. Each icon is a direct named export — nothing more.
