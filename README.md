# Material Web React

A Next.js component library that bridges **Google's Material Web** (`@material/web`) custom elements with **React 19**, providing fully typed, accessible, and themeable Material Design 3 components styled with **Tailwind CSS v4**.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Build & Production](#build--production)
- [Component Library](#component-library)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Chip & ChipSet](#chip--chipset)
  - [CircularProgress & LinearProgress](#circularprogress--linearprogress)
  - [FAB (Floating Action Button)](#fab-floating-action-button)
  - [Icon](#icon)
  - [IconButton](#iconbutton)
  - [List](#list)
  - [Radio](#radio)
  - [Ripple](#ripple)
  - [Select](#select)
  - [Slider](#slider)
  - [Switch](#switch)
  - [Tabs & Tab](#tabs--tab)
  - [TextField](#textfield)
- [Theming](#theming)
  - [How Theming Works](#how-theming-works)
  - [Changing the Seed Color](#changing-the-seed-color)
  - [Generated CSS Variables](#generated-css-variables)
  - [Dark Mode](#dark-mode)
  - [Typography Tokens](#typography-tokens)
  - [Per-Component Token Overrides](#per-component-token-overrides)
- [TypeScript Support](#typescript-support)
- [Scripts Reference](#scripts-reference)
- [Demo Page](#demo-page)
- [Contributing](#contributing)

---

## Overview

`md-web` solves the integration problem between React's virtual DOM and Web Components. Because Material Web ships as native custom elements (`<md-filled-button>`, `<md-checkbox>`, etc.), they require special handling to work correctly in React—particularly around boolean attributes, event handlers, and SSR hydration.

This library provides idiomatic React wrapper components for every Material Web element, exposes a fully typed API, and wires a Material 3 dynamic color system into both Tailwind and the browser's CSS custom property layer.

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.1.6 | App framework & SSR |
| [React](https://react.dev) | 19.2.3 | UI rendering |
| [@material/web](https://github.com/material-components/material-web) | ^2.4.1 | Material Design 3 Web Components |
| [@material/material-color-utilities](https://github.com/material-foundation/material-color-utilities) | ^0.4.0 | Dynamic color / theme generation |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first styling |
| [Lucide React](https://lucide.dev) | ^0.576.0 | Icon system |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4.6 | Dark/light mode management |
| TypeScript | ^5 | Type safety |

---

## Project Architecture

```
md-web/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, ThemeProvider
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Generated Material 3 CSS tokens + Tailwind
│   └── demo/
│       └── page.tsx            # Interactive component showcase
│
├── components/
│   ├── atoms/                  # React wrappers for Material Web elements
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Chip.tsx
│   │   ├── CircularProgress.tsx
│   │   ├── Fab.tsx
│   │   ├── Icon.tsx
│   │   ├── IconButton.tsx
│   │   ├── LinearProgress.tsx
│   │   ├── List.tsx
│   │   ├── Radio.tsx
│   │   ├── Ripple.tsx
│   │   ├── Select.tsx
│   │   ├── Slider.tsx
│   │   ├── Switch.tsx
│   │   ├── Tabs.tsx
│   │   └── TextField.tsx
│   └── demo/                   # Usage examples for each atom
│       ├── ButtonDemo.tsx
│       ├── CheckboxDemo.tsx
│       └── ...
│
├── lib/
│   └── theme.ts                # Theme generation & CSS variable utilities
│
├── scripts/
│   ├── update-theme.ts         # Generates app/globals.css from seed color
│   └── inspect-scheme.ts       # Prints available Material color scheme keys
│
└── types/
    └── material-web.d.ts       # JSX intrinsic element declarations for md-* tags
```

### Design Principles

**Thin wrappers, not reimplementations.** Each component in `components/atoms/` is a minimal React layer over the corresponding `@material/web` custom element. Props are mapped 1-to-1 to HTML attributes with proper React-to-Web-Component attribute bridging (e.g., boolean attributes, `class` vs `className`).

**Client components only.** All atoms are marked `'use client'` because `@material/web` registers browser custom elements and relies on the DOM. `suppressHydrationWarning` is used where needed to prevent SSR/client attribute mismatches on boolean props.

**Token-driven styling.** Colors, typography, and shape are controlled entirely through CSS custom properties (`--md-sys-color-*`, `--md-ref-typeface-*`, etc.), which are injected into `:root` by the theme generator. No Material component color is hardcoded.

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/md-web.git
cd md-web

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page, or navigate to [http://localhost:3000/demo](http://localhost:3000/demo) for the interactive component showcase.

### Build & Production

```bash
# Type-check and compile
npm run build

# Start production server
npm run start

# Lint the codebase
npm run lint
```

---

## Component Library

All components are located in `components/atoms/` and exported as named or default exports. Import them directly into any `'use client'` page or component.

---

### Button

Renders a Material Design 3 button in one of five variants.

```tsx
import Button from '@/components/atoms/Button';

// Filled (default)
<Button onClick={() => console.log('clicked')}>Save</Button>

// All variants
<Button variant="elevated">Elevated</Button>
<Button variant="filled">Filled</Button>
<Button variant="tonal">Tonal</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>

// Disabled state
<Button variant="filled" disabled>Disabled</Button>

// As a link
<Button variant="text" href="/about" target="_blank">Learn more</Button>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'elevated' \| 'filled' \| 'tonal' \| 'outlined' \| 'text'` | `'filled'` | Visual style variant |
| `disabled` | `boolean` | — | Disables interaction |
| `href` | `string` | — | Renders as an anchor tag |
| `target` | `string` | — | Link target (use with `href`) |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `MouseEventHandler` | — | Click handler |

---

### Checkbox

```tsx
import Checkbox from '@/components/atoms/Checkbox';
import { useState } from 'react';

function MyForm() {
  const [checked, setChecked] = useState(false);

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked((e.target as HTMLInputElement).checked)}
      />
      Accept terms
    </label>
  );
}

// Indeterminate state
<Checkbox indeterminate />

// Disabled
<Checkbox checked disabled />
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled checked state |
| `indeterminate` | `boolean` | — | Shows indeterminate state |
| `disabled` | `boolean` | — | Disables the checkbox |
| `required` | `boolean` | — | Marks as required in a form |
| `name` | `string` | — | Form field name |
| `value` | `string` | — | Form field value |
| `touchTarget` | `'wrapper' \| 'none'` | `'wrapper'` | Touch target size strategy |
| `onChange` | `ChangeEventHandler` | — | Change handler |

---

### Chip & ChipSet

Four chip variants available. Chips should be wrapped in a `ChipSet` container.

```tsx
import Chip, { ChipSet } from '@/components/atoms/Chip';
import { useState } from 'react';

// Assist chip (default)
<ChipSet>
  <Chip variant="assist" label="Open in maps" />
  <Chip variant="suggestion" label="Reply" />
</ChipSet>

// Filter chip with controlled selection
function FilterExample() {
  const [selected, setSelected] = useState(false);
  return (
    <ChipSet>
      <Chip
        variant="filter"
        label="Unread"
        selected={selected}
        onClick={() => setSelected(s => !s)}
      />
    </ChipSet>
  );
}

// Input chip (removable tag)
<ChipSet>
  <Chip variant="input" label="design@example.com" removable onRemove={() => {}} />
</ChipSet>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'assist' \| 'filter' \| 'input' \| 'suggestion'` | `'assist'` | Chip type |
| `label` | `string` | — | **Required.** Display text |
| `selected` | `boolean` | — | Filter chip selected state |
| `removable` | `boolean` | — | Input chip — shows remove button |
| `elevated` | `boolean` | — | Elevated surface style |
| `disabled` | `boolean` | — | Disables the chip |

---

### CircularProgress & LinearProgress

```tsx
import CircularProgress from '@/components/atoms/CircularProgress';
import LinearProgress from '@/components/atoms/LinearProgress';

// Determinate (value 0–1)
<CircularProgress value={0.75} />
<LinearProgress value={0.4} max={1} />

// Indeterminate (spinning/animated)
<CircularProgress indeterminate />
<LinearProgress indeterminate />

// Four-color variant
<CircularProgress indeterminate fourColor />
```

---

### FAB (Floating Action Button)

```tsx
import Fab from '@/components/atoms/Fab';
import Icon from '@/components/atoms/Icon';

// Standard FAB
<Fab variant="primary" onClick={handleCreate}>
  <Icon name="Plus" slot="icon" />
</Fab>

// With label (extended FAB)
<Fab variant="secondary" label="Compose" size="large">
  <Icon name="Pencil" slot="icon" />
</Fab>

// Branded FAB
<Fab branded variant="surface">
  <img src="/logo.svg" slot="icon" alt="" />
</Fab>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'surface'` | Color role |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | FAB size |
| `label` | `string` | — | Creates an extended FAB |
| `lowered` | `boolean` | — | Reduces elevation |
| `branded` | `boolean` | — | Uses `md-branded-fab` |

---

### Icon

The `Icon` component resolves names to **Lucide React** icons. Pass a PascalCase or kebab-case name.

```tsx
import Icon from '@/components/atoms/Icon';

// Used standalone
<Icon name="Home" size={24} color="currentColor" />

// Used in a slot inside a Material Web component
<Fab variant="primary">
  <Icon name="Plus" slot="icon" />
</Fab>

<Button variant="filled">
  <Icon name="Send" slot="icon" />
  Send
</Button>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Lucide icon name (PascalCase or kebab-case) |
| `size` | `number \| string` | `24` | Icon size in px |
| `strokeWidth` | `number \| string` | `2` | SVG stroke width |
| `color` | `string` | — | SVG color override |
| `slot` | `string` | — | Web Component slot attribute |

---

### List

```tsx
import { List, ListItem } from '@/components/atoms/List';

<List>
  <ListItem headline="Inbox" supporting="3 unread messages" />
  <ListItem headline="Sent" />
  <ListItem headline="Trash" disabled />
</List>
```

---

### Radio

```tsx
import Radio from '@/components/atoms/Radio';
import { useState } from 'react';

function RadioGroup() {
  const [value, setValue] = useState('a');
  return (
    <div>
      {['a', 'b', 'c'].map(v => (
        <label key={v} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Radio
            name="my-group"
            value={v}
            checked={value === v}
            onChange={() => setValue(v)}
          />
          Option {v.toUpperCase()}
        </label>
      ))}
    </div>
  );
}
```

---

### Select

```tsx
import Select from '@/components/atoms/Select';

<Select label="Country" value={country} onChange={setCountry}>
  <option value="us">United States</option>
  <option value="gb">United Kingdom</option>
  <option value="jp">Japan</option>
</Select>

// Outlined variant
<Select variant="outlined" label="Size">
  <option value="s">Small</option>
  <option value="m">Medium</option>
  <option value="l">Large</option>
</Select>
```

---

### Slider

```tsx
import Slider from '@/components/atoms/Slider';
import { useState } from 'react';

function VolumeControl() {
  const [volume, setVolume] = useState(50);
  return (
    <Slider
      min={0}
      max={100}
      value={volume}
      labeled
      onChange={(e) => setVolume(Number((e.target as HTMLInputElement).value))}
    />
  );
}

// Range slider
<Slider min={0} max={100} valueStart={20} valueEnd={80} range labeled />
```

---

### Switch

```tsx
import Switch from '@/components/atoms/Switch';
import { useState } from 'react';

function NotificationsToggle() {
  const [enabled, setEnabled] = useState(false);
  return (
    <label style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Switch
        selected={enabled}
        onChange={(e) => setEnabled((e.target as HTMLInputElement).checked)}
      />
      Push notifications
    </label>
  );
}

// With icons
<Switch selected showOnlySelectedIcon />
```

---

### Tabs & Tab

```tsx
import { Tabs, Tab } from '@/components/atoms/Tabs';
import { useState } from 'react';

function TabbedPanel() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Tabs activeTabIndex={active} onTabChange={setActive}>
        <Tab variant="primary" active={active === 0}>Overview</Tab>
        <Tab variant="primary" active={active === 1}>Details</Tab>
        <Tab variant="primary" active={active === 2}>Reviews</Tab>
      </Tabs>

      <div>
        {active === 0 && <p>Overview content</p>}
        {active === 1 && <p>Details content</p>}
        {active === 2 && <p>Reviews content</p>}
      </div>
    </>
  );
}

// Secondary tabs
<Tabs activeTabIndex={active} onTabChange={setActive}>
  <Tab variant="secondary" active={active === 0}>All</Tab>
  <Tab variant="secondary" active={active === 1}>Unread</Tab>
</Tabs>
```

---

### TextField

```tsx
import TextField from '@/components/atoms/TextField';
import { useState } from 'react';

// Filled (default)
<TextField
  label="Email address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Outlined variant
<TextField
  variant="outlined"
  label="Password"
  type="password"
  required
/>

// With supporting text and error state
<TextField
  label="Username"
  value={username}
  error={!!usernameError}
  errorText={usernameError}
  supportingText="Must be 3–20 characters"
  onChange={(e) => setUsername(e.target.value)}
/>

// With leading/trailing icons
<TextField label="Search">
  <Icon name="Search" slot="leading-icon" />
</TextField>
```

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'filled' \| 'outlined'` | `'filled'` | Visual style |
| `label` | `string` | — | Floating label text |
| `type` | `string` | `'text'` | HTML input type |
| `value` | `string` | — | Controlled value |
| `error` | `boolean` | — | Shows error styling |
| `errorText` | `string` | — | Error message below field |
| `supportingText` | `string` | — | Helper text below field |
| `required` | `boolean` | — | Marks the field as required |
| `disabled` | `boolean` | — | Disables the field |

---

## Theming

### How Theming Works

The theming pipeline is built on **Material Color Utilities** and generates a full Material Design 3 color scheme from a single seed hex color. The process runs as a Node.js script and writes the output directly into `app/globals.css`.

```
Seed Color (#48A111)
       │
       ▼
generateTheme()               ← @material/material-color-utilities
       │  Produces light + dark schemes
       │  + tonal palettes (primary, secondary, tertiary, neutral, error)
       ▼
themeToCssVariables()         ← lib/theme.ts
       │  Maps scheme keys to --md-sys-color-* CSS custom properties
       │  Adds surface container tokens from neutral palette tones
       ▼
update-theme.ts script        ← scripts/update-theme.ts
       │  Writes :root { } and @media (prefers-color-scheme: dark) { }
       ▼
app/globals.css               ← consumed by browser + Tailwind @theme
```

### Changing the Seed Color

1. Open `lib/theme.ts` and update `COLOR_SEED`:

```ts
// lib/theme.ts
export const COLOR_SEED = "#6750A4"; // Change to your brand color
```

2. Regenerate `globals.css`:

```bash
npx ts-node --project tsconfig.json scripts/update-theme.ts
```

The entire application theme — all Material Web component colors — will update automatically.

### Generated CSS Variables

The script generates the complete set of Material Design 3 system color tokens:

```css
:root {
  /* Role tokens */
  --md-sys-color-primary: #2d6a00;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #96f851;
  --md-sys-color-on-primary-container: #082000;

  --md-sys-color-secondary: #52634b;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #d5e8cb;
  --md-sys-color-on-secondary-container: #101f0c;

  --md-sys-color-tertiary: #386663;
  --md-sys-color-on-tertiary: #ffffff;

  --md-sys-color-error: #ba1a1a;
  --md-sys-color-on-error: #ffffff;

  --md-sys-color-background: #f9fbf3;
  --md-sys-color-on-background: #191d17;

  --md-sys-color-surface: #f9fbf3;
  --md-sys-color-on-surface: #191d17;
  --md-sys-color-surface-container-lowest: #ffffff;
  --md-sys-color-surface-container-low:   #f3f5ed;
  --md-sys-color-surface-container:       #edf0e7;
  --md-sys-color-surface-container-high:  #e7eae2;
  --md-sys-color-surface-container-highest: #e2e4dc;

  /* ... and more */
}
```

These tokens are consumed automatically by all `@material/web` components with no additional configuration.

### Dark Mode

Dark mode tokens are injected via a media query:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --md-sys-color-primary: #80db38;
    --md-sys-color-background: #111409;
    /* ... all tokens override to dark values */
  }
}
```

`next-themes` is configured in the root layout to also support a manual class-based toggle alongside the OS preference.

### Typography Tokens

Typography is mapped from Next.js font variables (Geist) to Material's reference typeface tokens in the generated CSS:

```css
body {
  --md-ref-typeface-brand: var(--font-geist-sans), system-ui;
  --md-ref-typeface-plain: var(--font-geist-sans), system-ui;

  --md-sys-typescale-headline-font: var(--font-geist-sans), system-ui;
  --md-sys-typescale-display-font:  var(--font-geist-sans), system-ui;
  --md-sys-typescale-body-font:     var(--font-geist-sans), system-ui;
  --md-sys-typescale-label-font:    var(--font-geist-sans), system-ui;
}
```

To use a custom font, update the font variable references here after loading your font in `app/layout.tsx`.

### Per-Component Token Overrides

Every `@material/web` component exposes CSS custom properties for fine-grained overrides. Apply them inline or via a class:

```tsx
// Override the container height of a single button
<Button
  variant="filled"
  style={{ '--md-filled-button-container-height': '56px' } as React.CSSProperties}
>
  Tall Button
</Button>
```

```css
/* Or via a CSS class for a group of components */
.my-large-input {
  --md-filled-text-field-container-shape: 12px;
  --md-filled-text-field-focus-active-indicator-color: var(--md-sys-color-tertiary);
}
```

Refer to the [Material Web component tokens reference](https://github.com/material-components/material-web/blob/main/docs/theming.md) for the full list of available properties per component.

---

## TypeScript Support

All Material Web custom elements (`md-*`) are declared as valid JSX intrinsic elements in `types/material-web.d.ts`. This file augments React's `JSX.IntrinsicElements` interface so TypeScript understands every attribute, event handler, and slot of every element.

```ts
// types/material-web.d.ts (excerpt)
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': React.DetailedHTMLProps<...> & {
        disabled?: boolean;
        href?: string;
        target?: string;
        class?: string;
      };
      'md-checkbox': React.DetailedHTMLProps<...> & {
        checked?: boolean;
        indeterminate?: boolean;
        'touch-target'?: 'wrapper' | 'none';
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
      };
      // ... all other md-* elements
    }
  }
}
```

You do not need to modify this file when using the React wrapper components — it exists to support cases where you consume the custom elements directly.

---

## Scripts Reference

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Starts Next.js development server with HMR |
| Build | `npm run build` | Production build with type checking |
| Start | `npm run start` | Serves the production build |
| Lint | `npm run lint` | Runs ESLint across the project |
| Update theme | `npx ts-node scripts/update-theme.ts` | Regenerates `app/globals.css` from `COLOR_SEED` |
| Inspect scheme | `npx ts-node scripts/inspect-scheme.ts` | Prints available Material color scheme keys to stdout |

---

## Demo Page

Navigate to `/demo` for a live interactive showcase of all components, organized into four tab sections:

| Tab | Components |
|---|---|
| **Buttons & Inputs** | Button, Checkbox, TextField, Select |
| **Selection Controls** | Radio, Switch, Slider, Icon |
| **Navigation & Selection** | Tabs, Chip, FAB, List |
| **Feedback & Others** | CircularProgress, LinearProgress, Ripple |

---

## Contributing

1. Fork the repository and create a feature branch: `git checkout -b feat/my-component`
2. Follow the existing atom pattern in `components/atoms/` — keep wrappers thin and focused on React/Web Component bridging
3. Add a corresponding demo component in `components/demo/`
4. Register new custom elements in `types/material-web.d.ts` if adding new `md-*` elements
5. Run `npm run lint` and `npm run build` before opening a pull request

---

> Built with [Material Web](https://material-web.dev) · [Next.js](https://nextjs.org) · [Tailwind CSS](https://tailwindcss.com)
