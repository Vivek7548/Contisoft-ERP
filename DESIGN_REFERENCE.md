# Visual Design Reference Guide

## Color Palette

### Primary Colors
- **Purple Primary**: #667eea (Navigation, Buttons, Accents)
- **Purple Secondary**: #764ba2 (Gradients, Hover states)
- **Gold Accent**: #ffd700 (Highlights, CTAs)
- **Gold Light**: #ffed4e (Hover effects)

### Background Colors
- **Dark Background**: #0f0f15 (Footer, Dark sections)
- **Darker Background**: #0a0a0f (Footer base)
- **Dark Hero**: #1a1a25 (Footer gradient)

### Text Colors
- **Light Text**: #ddd, #e8e8f0
- **Dark Text**: #bbb (Muted)
- **Bright White**: #fff (Headers)

---

## Gradient Definitions

### Navbar Gradient
```scss
background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.05) 100%);
```

### Hero Section Gradient Overlay
```scss
background: 
    linear-gradient(135deg, rgba(10, 14, 39, 0.85) 0%, rgba(26, 31, 77, 0.88) 25%, 
                   rgba(13, 45, 74, 0.87) 50%, rgba(45, 90, 61, 0.84) 75%, 
                   rgba(74, 124, 62, 0.83) 100%),
    url('https://images.unsplash.com/photo-1555066931-4365d440a117...');
```

### Footer Gradient
```scss
background: linear-gradient(135deg, #0f0f15 0%, #0a0a0f 50%, #1a1a25 100%);
```

### Text Gradient (Headings)
```scss
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ffd700 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## Animation Timing Functions

### Primary Easing
```scss
cubic-bezier(0.22, 1, 0.36, 1)  // Smooth, bouncy easing
cubic-bezier(0.4, 0, 0.2, 1)    // Standard smooth easing
```

### Durations
- **Micro interactions**: 0.25s - 0.3s
- **Standard transitions**: 0.3s - 0.4s
- **Load animations**: 0.6s - 1.2s
- **Continuous animations**: 6s - 24s

---

## Key Animations

### Hero Text Entrance
- **Duration**: 1.2s
- **Easing**: cubic-bezier(0.22, 1, 0.36, 1)
- **Start**: translateX(-60px), opacity 0
- **End**: translateX(0), opacity 1

### Rotating Circles (Hero Graphics)
- **Outer**: 24s clockwise rotation
- **Middle**: 18s counter-clockwise rotation
- **Inner**: 12s pulse with scale

### Gradient Text Animation
- **Duration**: 5s
- **Effect**: Background position shift 0% → 100% → 0%
- **Direction**: Left to right flow

### Pulsing Glow (Hero Background)
- **Duration**: 6s
- **Effect**: Opacity 0.6 ↔ 0.9
- **Easing**: ease-in-out

---

## Shadow System

### Navigation Shadow
```scss
box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 0 1px rgba(102, 126, 234, 0.3);
```

### Button Hover Shadow
```scss
box-shadow: 0 14px 42px rgba(165, 255, 0, 0.35), 
            0 0 20px rgba(16, 14, 128, 0.2);
```

### Circle Glow (Hero)
```scss
box-shadow: 0 0 40px rgba(165, 255, 0, 0.15);
```

### Footer Links Hover
```scss
box-shadow: none (Underline effect instead)
```

---

## Responsive Breakpoints

### Desktop
- **Screen**: ≥1200px
- **Navbar**: Full horizontal menu
- **Hero**: Side-by-side layout
- **Footer**: 3-column grid

### Tablet
- **Screen**: 768px - 1199px
- **Navbar**: Hamburger menu starts
- **Hero**: Adjusted circle sizes
- **Footer**: Stacked with flexbox

### Mobile
- **Screen**: ≤767px
- **Navbar**: Full-screen slide-out menu
- **Hero**: Stacked vertical layout
- **Footer**: Single column

---

## Typography Scale

### Headings
- **H1 Hero**: 4.2rem (Desktop) → 1.8rem (Mobile)
- **H1 Section**: 3.0rem (Desktop) → 2rem (Mobile)
- **H4 Cards**: 1.35rem (Desktop) → 1.2rem (Mobile)

### Body Text
- **Large**: 1.3rem (Hero paragraphs)
- **Normal**: 1rem (Default)
- **Small**: 0.95rem (UI labels)
- **Micro**: 0.14rem (Footers)

---

## Border & Spacing

### Radius
- **Navbar**: 8px (menu items)
- **Buttons**: 28px (rounded pills)
- **Cards**: 12-16px
- **Footer**: No fixed radius (linear gradient)

### Spacing
- **Navigation gap**: 24px (desktop) → 12px (mobile)
- **Section padding**: 60px (desktop) → 20px (mobile)
- **Card padding**: 2.5rem (desktop) → 1rem (mobile)

---

## Filter Effects

### Logo Hover (Navbar)
```scss
filter: brightness(1.15) drop-shadow(0 8px 24px rgba(255, 215, 0, 0.4));
transform: scale(1.08) translateY(-3px);
```

### Image Hover (Hero)
```scss
filter: drop-shadow(0 0 12px rgba(165, 255, 0, 0.5)) brightness(1.1);
transform: scale(1.08);
```

---

## Best Practices Applied

✓ **Performance**: Hardware acceleration via transforms
✓ **Accessibility**: Maintained color contrast ratios
✓ **Semantics**: No changes to HTML structure
✓ **Mobile-First**: Responsive from smallest to largest
✓ **Animations**: 60fps capable, smooth easing
✓ **Maintenance**: SCSS variables for easy theming
✓ **Compatibility**: Cross-browser prefixes included

---

## Future Customization

### To Change Primary Color (Purple → Custom):
1. Update `$color-primary` in navbar.component.scss
2. Update `$primary-purple` in footer.component.scss
3. Update gradient definitions in hero.component.scss

### To Adjust Animation Speed:
1. Modify `duration` value in `@keyframes` definitions
2. Update `animation: name Xs` property

### To Change Background Image:
1. Replace Unsplash URL in `.hero` background property
2. Ensure image is high quality (2000px+ width)

---

## Testing Checklist

- [x] Desktop view (1440px+)
- [x] Tablet view (768px-1024px)
- [x] Mobile view (375px-480px)
- [x] Animations on load
- [x] Hover states
- [x] Click interactions
- [x] Responsive transitions
- [x] Cross-browser compatibility

