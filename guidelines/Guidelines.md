# Controle-C Landing Page — Design System

## Aesthetic Stance

**Tech Premium / Linear-inspired SaaS**

Dark mode predominant interface with glassmorphism, glow effects, and sophisticated gradients. The aesthetic draws from Linear, Notion, Arc Browser, Stripe, and modern productivity tools — clean, technological, minimalist premium.

## Typography

- **Display**: Inter (headings, hero text, navigation)
- **Body**: Inter (body copy, descriptions)
- **Mono**: JetBrains Mono (labels, data, technical elements)

Inter provides a modern, clean sans-serif perfect for tech products. JetBrains Mono adds technical sophistication for data points and labels.

## Color Palette

### Base
- `--background`: #0B0F19 (deep dark blue-black)
- `--surface`: #111827 (elevated surfaces)
- `--surface-elevated`: #151B2E (cards, panels)

### Accent
- `--primary`: #8B5CF6 (vibrant purple)
- `--accent-cyan`: #06B6D4 (bright cyan)
- `--accent-blue`: #3B82F6 (electric blue)
- `--glow-purple`: #A855F7 (glow effects)

### Text
- `--foreground`: #F9FAFB (primary text)
- `--foreground-muted`: #9CA3AF (secondary text)
- `--foreground-subtle`: #6B7280 (tertiary text)

### Border
- `--border`: rgba(255, 255, 255, 0.1) (subtle dividers)
- `--border-focus`: rgba(139, 92, 246, 0.5) (focus states)

## Visual Effects

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Glow Effects
```css
box-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
```

### Gradients
- Hero background: radial gradient from purple to deep blue
- Accent gradients: purple → cyan
- Subtle mesh backgrounds

## Layout Principles

- **Generous spacing**: Large padding, breathable sections
- **Clean hierarchy**: Clear visual separation between sections
- **Rounded corners**: 12px-24px for modern feel
- **Grid-based**: Responsive grid system
- **Full-bleed sections**: Hero and major sections use full width

## Component Patterns

### Cards
- Glassmorphism background
- Subtle borders
- Hover states with glow
- Rounded corners (16px-20px)

### Buttons
- Primary: Purple gradient with glow on hover
- Secondary: Transparent with border
- Smooth transitions

### Navigation
- Fixed navbar with blur background
- Clean links
- Highlighted CTA button

## Imagery

- Use dashboard mockups with realistic data
- Charts and graphs in brand colors
- Abstract tech backgrounds
- Grid patterns and geometric shapes

## Accessibility

- Text contrast: Minimum AA (4.5:1)
- Focus states: Clear purple outline
- Interactive elements: Minimum 44px touch targets
- Semantic HTML throughout

## Responsive Behavior

- Desktop: Full multi-column layouts
- Tablet: Adjusted grid (768px breakpoint)
- Mobile: Single column, stacked sections (640px breakpoint)

## Animation

- Subtle motion on scroll (fade in, slide up)
- Smooth hover transitions (200ms-300ms)
- Glow pulse effects on CTAs
- No excessive motion

## Voice & Tone

- Confident and modern
- Technical but accessible
- Concise and impactful
- Professional without being corporate
